import React from 'react';
import { useTranslation } from '../TranslationContext';
import { animateOnScroll } from '../animations';
import '../styles/teachers.css';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TeachersSection: React.FC = () => {
  const { t } = useTranslation();
  // Teacher data for Swiper (4 and onward)
  const swiperTeachers = [
    {
      img: '/assets/img/JasurbekUmarov.jpg',
      name: t('teacher4-name'),
      title: t('teacher4-title'),
      desc: t('teacher4-description'),
      achievements: [
        t('teacher4-achievement1'),
        t('teacher4-achievement2'),
        t('teacher4-achievement3'),
      ],
    },
    {
      img: '/assets/img/OzodbekEshboboev.jpg',
      name: t('teacher5-name'),
      title: t('teacher5-title'),
      desc: t('teacher5-description'),
      achievements: [
        t('teacher5-achievement1'),
        t('teacher5-achievement2'),
        t('teacher5-achievement3'),
      ],
    },
    {
      img: '/assets/img/KhusanRakhimov.jpg',
      name: t('teacher6-name'),
      title: t('teacher6-title'),
      desc: t('teacher6-description'),
      achievements: [
        t('teacher6-achievement1'),
        t('teacher6-achievement2'),
        t('teacher6-achievement3'),
      ],
    },
    {
      img: '/assets/img/JamshidbekIzzatulloh.jpg',
      name: t('teacher7-name'),
      title: t('teacher7-title'),
      desc: t('teacher7-description'),
      achievements: [
        t('teacher7-achievement1'),
        t('teacher7-achievement2'),
        t('teacher7-achievement3'),
      ],
    },
  ];

  // Helper to truncate text
  const truncate = (str: string, n: number) => (str.length > n ? str.slice(0, n - 1) + '…' : str);
  React.useEffect(() => { animateOnScroll(); }, []);
  return (
    <section id="teachers" className="teachers">
      <div className="teachers-container">
        <div data-animate="center">
          <h2>{t('teachers-title')}</h2>
        </div>
        <div className="teacher-list">
          {/* Teacher 1 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="100">
            <div className="teacher-image">
              <img src="/assets/img/OlimjonUvayzov.JPG" alt="Olimjon Uvayzov" style={{ height: 600, objectFit: 'cover', borderRadius: 16 }} />
            </div>
            <div className="teacher-info">
              <h3 style={{ textAlign: 'center' }}>{t('teacher1-name')}</h3>
              <p className="teacher-title" style={{ textAlign: 'center' }}>{t('teacher1-title')}</p>
              <p className="teacher-description" style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: t('teacher1-description') }} />
              <div className="teacher-achievements" style={{ textAlign: 'left' }}>
                <span className="achievement">{t('teacher1-achievement1')}</span>
                <span className="achievement">{t('teacher1-achievement2')}</span>
                <span className="achievement">{t('teacher1-achievement3')}</span>
              </div>
            </div>
          </div>
          {/* Teacher 2 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="200">
            <div className="teacher-info">
              <h3 style={{ textAlign: 'center' }}>{t('teacher2-name')}</h3>
              <p className="teacher-title" style={{ textAlign: 'center' }}>{t('teacher2-title')}</p>
              <p className="teacher-description" style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: t('teacher2-description') }} />
              <div className="teacher-achievements" style={{ textAlign: 'left' }}>
                <span className="achievement">{t('teacher2-achievement1')}</span>   
                <span className="achievement">{t('teacher2-achievement2')}</span>
                <span className="achievement">{t('teacher2-achievement3')}</span>
              </div>
            </div>
            <div className="teacher-image">
              <img src="/assets/img/AlijonovAzizbek.JPG" alt="Azizbek Alijonov" style={{ height: 600, objectFit: 'cover', borderRadius: 16 }} />
            </div>
            <img className="teacher-logo-corner right" src="/assets/img/KAIST.png" alt="University Logo" />
          </div>

          {/* Teacher 8 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="300">
            <img className="teacher-logo-corner" src="/assets/img/CMUQ.png" alt="University Logo" />
            <div className="teacher-image">
              <img src="/assets/img/Aruzhan.JPG" alt="Aruzhan" style={{height: 600, objectFit: 'cover', borderRadius: 16 }} />
            </div>
            <div className="teacher-info">
              <h3 style={{ textAlign: 'center' }}>{t('teacher3-name')}</h3>
              <p className="teacher-title" style={{ textAlign: 'center' }}>{t('teacher3-title')}</p>
              <p className="teacher-description" style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: t('teacher3-description') }} />
              <div className="teacher-achievements" style={{ textAlign: 'left' }}>
                <span className="achievement">{t('teacher3-achievement1')}</span>
                <span className="achievement">{t('teacher3-achievement2')}</span>
                <span className="achievement">{t('teacher3-achievement3')}</span>
              </div>
            </div>
          </div>
          

          <div data-animate="center">
            <h2>{t('teachers-title2')}</h2>
          </div>

          {/* Teacher 3 */}
          <div className="teacher-item" data-animate="card" data-animate-delay="200">
          <div className="teacher-info">
              <h3 style={{ textAlign: 'center' }}>{t('teacher3-name')}</h3>
              <p className="teacher-title" style={{ textAlign: 'center' }}>{t('teacher3-title')}</p>
              <p className="teacher-description" style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: t('teacher3-description') }} />
              <div className="teacher-achievements" style={{ textAlign: 'left' }}>
                <span className="achievement">{t('teacher3-achievement1')}</span>
                <span className="achievement">{t('teacher3-achievement2')}</span>
                <span className="achievement">{t('teacher3-achievement3')}</span>
              </div>
            </div>
            <div className="teacher-image">
              <img src="/assets/img/IMG_0913.PNG" alt="Aruzhan" style={{ height: 600, objectFit: 'cover', borderRadius: 16 }} />
            </div>
            <img className="teacher-logo-corner right" src="/assets/img/CMUQ.png" alt="University Logo" />
          </div>
          
          <div data-animate="center">
            <h2>{t('teachers-title2')}</h2>
          </div>
          {/* Swiper for teachers 4+ */}
          <div className="teacherimg-swiper-section">
            <Swiper
              className="teacherimg-swiper"
              modules={[Autoplay, Pagination]}
              spaceBetween={32}
              slidesPerView={3}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
            >
              {swiperTeachers.map((teacher, idx) => (
                <SwiperSlide key={teacher.name + idx}>
                  <div className="teacherimg-swiper-slide">
                    <img className="teacherimg-swiper-img" src={teacher.img} alt={teacher.name} />
                    <div className="teacherimg-swiper-overlay">
                      <div className="teacherimg-swiper-overlay-name">{teacher.name}</div>
                      <div className="teacherimg-swiper-overlay-title">{teacher.title}</div>
                      <div className="teacherimg-swiper-overlay-features">
                        {teacher.achievements.map((ach, i) => (
                          <div className="teacherimg-swiper-overlay-feature" key={i}>{ach}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection; 