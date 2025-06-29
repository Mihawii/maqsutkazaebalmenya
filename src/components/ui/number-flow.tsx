import React, { useEffect, useState } from 'react';

interface NumberFlowProps {
  value: number;
  format?: {
    style: string;
    currency: string;
    minimumFractionDigits: number;
    maximumFractionDigits: number;
  };
  formatter?: (value: number) => string;
  transformTiming?: {
    duration: number;
    easing: string;
  };
  willChange?: boolean;
  className?: string;
}

const NumberFlow: React.FC<NumberFlowProps> = ({
  value,
  format,
  formatter,
  transformTiming,
  willChange,
  className
}) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const startValue = displayValue;
    const endValue = value;
    const duration = transformTiming?.duration || 500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (endValue - startValue) * easeOut;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, transformTiming?.duration]);

  const formatValue = (val: number) => {
    if (formatter) {
      return formatter(Math.round(val));
    }
    
    if (format?.style === 'currency') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: format.currency || 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(val));
    }
    
    return Math.round(val).toString();
  };

  return (
    <span 
      className={className}
      style={{ 
        willChange: willChange ? 'transform' : 'auto',
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      {formatValue(displayValue)}
    </span>
  );
};

export default NumberFlow; 