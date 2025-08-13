import bgMain from '@/assets/bg.jpg';
import avatar3D from '@/assets/avatar-3d.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import ReviewAvatars from '../../components/reviews/Reviews';
import bannerMain2 from '@/assets/banner-main-2.png';
import bannerMain3 from '@/assets/banner-main-3.png';
import experienceInfo from '@/assets/experience-info.svg';
import {
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/16/solid';
import group1 from '@/assets/group-1.png';
import group2 from '@/assets/group-2.png';
import group3 from '@/assets/group-3.png';
import group4 from '@/assets/group-4.png';
import group5 from '@/assets/group-5.png';
import logoEllipses from '@/assets/logo-ellipses.svg';
import vector2 from '@/assets/vector-2.svg';

import icon1 from '@/assets/icon-1.svg';
import icon2 from '@/assets/icon-2.svg';
import icon3 from '@/assets/icon-3.svg';

import image1 from '@/assets/image-1.png';
import image2 from '@/assets/image-2.png';
import image3 from '@/assets/image-3.png';
import image4 from '@/assets/image-4.png';
import image5 from '@/assets/image-5.png';
function Home() {
  return (
    <main>
      <section
        style={{ backgroundImage: `url(${bgMain})` }}
        className="min-h-[64vh] w-full p-8 font-sans md:p-16 lg:p-24"
      >
        <div className="container relative mx-auto flex max-w-7xl flex-row justify-center gap-16">
          <div className="h-auto w-5/12 space-y-3">
            <div className="">
              <p>Great Design Services</p>
              <p>Without The Pretentiousness.!</p>
            </div>

            <div>
              <h1 className="mt-2 font-gallery text-[180px] leading-none text-background">
                Digital
              </h1>
            </div>
            <div>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="relative mt-6 rounded-[40px] bg-accent py-8 pr-24 font-bold">
                    <p className="pl-6 text-left font-jakarta text-2xl">
                      WEB <br />
                      DESIGN
                    </p>
                    <div className="absolute -right-24 top-1/2 -translate-y-1/2 rounded-[45px] bg-background px-6 py-6">
                      <img
                        src={avatar3D}
                        alt="3D Avatar"
                        className="h-20 w-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="my-20 flex flex-row gap-10 self-center">
              <div className="flex w-2/3 flex-col">
                <p className="leading-relaxed">
                  We believe that the surest measure of success is when our
                  partners with us more than half It's more than just the <br />{' '}
                  visuals. We're here to support your growth.
                </p>
                <a
                  href="#"
                  className="mt-6 flex justify-end text-base font-bold"
                >
                  <span className="flex border-b-2 border-background">
                    View All Services{' '}
                    <ArrowUpRightIcon className="ml-2 h-5 w-5" />
                  </span>
                </a>
              </div>
              <div className="flex flex-col items-end">
                <ReviewAvatars />
                <p className="mt-2 text-base">
                  Excellent: <span className="font-semibold"> 4,000+</span>{' '}
                  Reviews
                </p>
              </div>
            </div>
            <h1 className="absolute -ml-44 -mt-8 font-gallery text-[180px] leading-none text-background">
              Solution
            </h1>
          </div>
        </div>
      </section>
      <section>
        <img
          src={bannerMain2}
          alt="Banner da mulher apontando notebook"
          className="h-auto w-full"
        />
      </section>
      <section className="bg-background pt-10 text-primary">
        <div className="container relative mx-auto max-w-7xl space-y-12 p-8 md:p-16 lg:p-24">
          <h2 className="mb-4 w-2/3 font-marcellus text-3xl/10">
            We collaborate with a few disability service <br /> providers to
            create inclusive goods that <br /> meet their requirements.
          </h2>

          <div className="mx-auto flex max-w-4xl flex-row items-center justify-center gap-24">
            <img
              src={experienceInfo}
              alt="Experience Info"
              className="mt-6 h-auto w-[120px]"
            />
            <div className="space-y-4">
              <p className="text-sm">
                Established in 1995, NEXIN has been a leading force in the
                digital landscape for over two decades. We're a passionate team
                of designers,{' '}
              </p>

              <p className="flex w-fit cursor-pointer items-center border-b-2 font-kanit text-base">
                More About Us <ArrowUpRightIcon className="ml-2 h-5 w-5" />
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-sm">
                Established in 1995, NEXIN has been a leading force in the
                digital landscape for over two decades. We're a passionate team
                of designers,{' '}
              </p>

              <p className="flex w-fit cursor-pointer items-center border-b-2 font-kanit text-base">
                Get In Touch <ArrowUpRightIcon className="ml-2 h-5 w-5" />
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-8 text-alternative">
            <div className="h-px w-32 bg-alternative"></div>

            <h3 className="flex-shrink-0 font-marcellus text-2xl text-primary">
              We Worked With Global Largest Brands
            </h3>

            <div className="h-px grow bg-alternative"></div>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
            <img src={group1} alt="Brand Logo 1" />
            <img src={group2} alt="Brand Logo 2" />
            <img src={group4} alt="Brand Logo 3" />
            <img src={group3} alt="Brand Logo 4" />
            <img src={group5} alt="Brand Logo 5" />
          </div>

          <img
            src={logoEllipses}
            alt="Decorative Ellipses"
            className="absolute right-0 top-0 z-0"
          />
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <div className="relative flex flex-col items-center justify-center space-y-6 p-8 text-center md:p-16 lg:p-24">
            <div className="w-2/4 space-y-4 text-left">
              <svg
                width="105"
                height="16"
                viewBox="0 0 120 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8.5" cy="8" r="8" fill="#121212" />
                <circle cx="16.5" cy="8" r="7.5" stroke="#FF6633" />
                <path
                  d="M45.908 14.192C45.1507 14.192 44.4467 14.0533 43.796 13.776C43.156 13.4987 42.6013 13.1147 42.132 12.624C41.6733 12.1227 41.3373 11.5413 41.124 10.88L42.932 10.096C43.22 10.7787 43.636 11.3173 44.18 11.712C44.804 12.096 45.3373 12.288 46.02 12.288C46.404 12.288 46.7347 12.2293 47.012 12.112C47.3 11.984 47.5187 11.8133 47.668 11.6C47.828 11.3867 47.908 11.1307 47.908 10.832C47.908 10.48 47.8013 10.192 47.588 9.968C47.3853 9.73333 47.076 9.552 46.66 9.424L44.380 8.688C43.444 8.4 42.7453 7.968 42.276 7.392C41.8067 6.816 41.580 6.13867 41.580 5.36C41.580 4.67733 41.7373 4.07467 42.068 3.552C42.4093 3.02933 42.8787 2.624 43.476 2.336C44.084 2.03733 44.7773 1.888 45.556 1.888C46.2707 1.888 46.9267 2.016 47.524 2.280C48.1213 2.51733 48.6333 2.864 49.06 3.312C49.4973 3.74933 49.8227 4.26667 50.036 4.864L48.244 5.664C48.0093 5.06667 47.6573 4.608 47.188 4.288C46.7187 3.95733 46.1747 3.792 45.556 3.792C45.1933 3.792 44.8733 3.856 44.596 3.984C44.3187 4.10133 44.1 4.280 43.94 4.496C43.7907 4.70933 43.716 4.96533 43.716 5.264C43.716 5.59467 43.8227 5.888 44.036 6.144C44.2493 6.38933 44.5747 6.58133 45.012 6.80L47.204 7.408C48.1533 7.71733 48.8627 8.144 49.332 8.688C49.812 9.232 50.052 9.904 50.052 10.704C50.052 11.3867 49.876 11.9893 49.524 12.512C49.180 13.0347 48.6867 13.4453 48.068 13.744C47.4493 14.0427 46.8093 14.192 45.908 14.192ZM52.0114 14V2.08H59.9314V4H54.1874V7.056H59.6114V8.976H54.1874V12.08H59.9314V14H52.0114ZM61.527 14V2.08H65.959C66.7697 2.08 67.4843 2.22933 68.103 2.528C68.7323 2.816 69.223 3.24267 69.575 3.808C69.927 4.36267 70.103 5.04 70.103 5.84C70.103 6.66133 69.9057 7.36 69.511 7.936C69.127 8.512 68.6043 8.93867 67.943 9.216L70.679 14H68.215L65.287 8.768L66.695 9.6H63.703V14H61.527ZM63.703 7.68H65.991C66.3857 7.68 66.807 7.60533 67.015 7.456C67.303 7.296 67.527 7.07733 67.687 6.8C67.847 6.52267 67.927 6.20267 67.927 5.84C67.927 5.46667 67.847 5.14667 67.687 4.88C67.527 4.60267 67.303 4.38933 67.015 4.24C66.807 4.08 66.3857 4 65.991 4H63.703V7.68ZM75.1329 14L70.9809 2.08H73.3409L76.6049 11.952H76.1409L79.4049 2.08H81.7809L77.6289 14H75.1329ZM83.1051 14V2.08H85.2811V14H83.1051ZM93.1739 14.192C92.3205 14.192 91.5312 14.0373 90.8059 13.808C90.0912 13.4187 89.4619 12.9867 88.9179 12.432C88.3845 11.8773 87.9685 11.2267 87.6699 10.48C87.3712 9.73333 87.2219 8.91733 87.2219 8.032C87.2219 7.14667 87.3659 6.33067 87.6539 5.584C87.9525 4.82667 88.3685 4.176 88.9019 3.632C89.4459 3.07733 90.0805 2.65067 90.8059 2.352C91.5312 2.04267 92.3205 1.888 93.1739 1.888C94.0280 1.888 94.7899 2.032 95.4619 2.32C96.1445 2.608 96.8005 2.992 97.1899 3.480C97.6592 3.94133 97.9952 4.45867 98.1979 5.024L96.2459 5.936C96.0219 5.33867 95.6432 4.848 95.1099 4.464C94.5765 4.06933 93.9312 3.880 93.1739 3.880C92.4280 3.880 91.7659 4.048 91.1899 4.4C90.6245 4.752 90.1819 5.23733 89.8619 5.856C89.5525 6.47467 89.3979 7.2 89.3979 8.032C89.3979 8.864 89.5525 9.59467 89.8619 10.224C90.1819 10.8427 90.6245 11.328 91.1899 11.68C91.7659 12.032 92.4280 12.208 93.1739 12.208C93.9312 12.208 94.5765 12.016 95.1099 11.632C95.6432 11.2373 96.0219 10.7413 96.2459 10.144L98.1979 11.056C97.9952 11.6213 97.6592 12.144 97.1899 12.624C96.8005 13.0933 96.1445 13.480 95.4619 13.76C94.7899 14.048 94.0280 14.192 93.1739 14.192ZM99.9645 14V2.08H107.885V4H102.141V7.056H107.565V8.976H102.141V12.08H107.885V14H99.9645ZM113.736 14.192C112.979 14.192 112.275 14.0533 111.624 13.776C110.984 13.4987 110.429 13.1147 109.96 12.624C109.501 12.1227 109.165 11.5413 108.952 10.88L110.76 10.096C111.048 10.7787 111.464 11.3173 112.008 11.712C112.552 12.096 113.165 12.288 113.848 12.288C114.232 12.288 114.563 12.2293 114.84 12.112C115.128 11.984 115.347 11.8133 115.496 11.6C115.656 11.3867 115.736 11.1307 115.736 10.832C115.736 10.48 115.629 10.192 115.416 9.968C115.213 9.73333 114.904 9.552 114.488 9.424L112.2 8.688C111.280 8.4 110.573 7.968 110.104 7.392C109.635 6.816 109.4 6.13867 109.4 5.36C109.4 4.67733 109.565 4.07467 109.896 3.552C110.237 3.02933 110.707 2.624 111.304 2.336C111.912 2.03733 112.605 1.888 113.384 1.888C114.099 1.888 114.755 2.016 115.352 2.280C115.949 2.51733 116.461 2.864 116.888 3.312C117.325 3.74933 117.651 4.26667 117.864 4.864L116.080 5.664C115.837 5.06667 115.485 4.608 115.016 4.288C114.547 3.95733 114.003 3.792 113.384 3.792C113.021 3.792 112.701 3.856 112.424 3.984C112.147 4.10133 111.928 4.280 111.768 4.496C111.619 4.70933 111.544 4.96533 111.544 5.264C111.544 5.59467 111.651 5.888 111.864 6.144C112.077 6.38933 112.403 6.58133 112.84 6.80L115.032 7.408C115.981 7.71733 116.691 8.144 117.16 8.688C117.64 9.232 117.88 9.904 117.88 10.704C117.88 11.3867 117.704 11.9893 117.352 12.512C117 13.0347 116.515 13.4453 115.896 13.744C115.277 14.0427 114.557 14.192 113.736 14.192Z"
                  fill="#797E88"
                />
              </svg>

              <h2 className="font-marcellus text-5xl">
                Empowering Brands Through Strategic Digital Services
              </h2>
            </div>
            <div className="mx-auto flex w-[1220px] items-center justify-center gap-4 border-b-2 pb-16">
              <div className="h-20 w-px bg-secondary"></div>

              <p className="max-w-2xl text-left text-sm text-tertiary">
                Established in 1995, NEXIN has been a leading force <br /> in
                the digital landscape for over two decades. We're <br /> a
                passionate team of designers,
              </p>
            </div>
            <img
              src={vector2}
              alt=""
              className="absolute left-0 top-0 z-0 w-32 pt-[75px]"
            />
            <div className="mx-auto flex w-[1220px] flex-row gap-6 pt-8">
              <div className="relative flex w-1/3 flex-col space-y-4 border-2 border-secondary p-10 text-left">
                <p className="flex items-center gap-2 text-sm text-tertiary">
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="3" r="2.5" fill="#797E88" />
                  </svg>
                  Visual Branding
                </p>

                <h2 className="font-marcellus text-3xl">
                  Web Design and <br /> Development
                </h2>

                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.9162 2.9388C31.1796 2.56688 30.2839 2.56688 29.5480 2.9388L11.2414 12.1811C9.56866 13.0256 9.56866 15.2118 11.2414 16.0563L29.5480 25.2986C30.2839 25.6705 31.1796 25.6705 31.9162 25.2986L50.2221 16.0563C51.8948 15.2118 51.8948 13.0256 50.2221 12.1811L31.9162 2.9388ZM28.1258 0.613661C29.7464 -0.204553 31.717 -0.204554 33.3376 0.613661L51.6434 9.85594C55.3234 11.7139 55.3234 16.5235 51.6435 18.3814L33.3376 27.6237C31.717 28.4419 29.7464 28.4419 28.1258 27.6237L9.81997 18.3814C6.14002 16.5235 6.14001 11.7139 9.81997 9.85594L28.1258 0.613661ZM6.50704 24.2564C4.88265 23.4749 2.92683 24.5451 2.92683 26.2154V46.5981C2.92683 47.4071 3.41177 48.1518 4.19205 48.5411L21.2652 57.0596C22.8907 57.8706 24.878 56.8018 24.878 55.1167V34.4297C24.878 33.6086 24.3787 32.8549 23.5802 32.4707L6.50704 24.2564ZM0 26.2154C0 22.5407 4.30281 20.1863 7.87647 21.9057L24.9496 30.12C26.7062 30.9651 27.8049 32.6234 27.8049 34.4297V55.1167C27.8049 58.824 23.4327 61.1754 19.8567 59.3912L2.78349 50.8807C1.06686 50.0162 0 48.3778 0 46.5981V26.2154ZM57.0732 26.2154C57.0732 24.5451 55.1173 23.4749 53.493 24.2564L36.4198 32.4707C35.6213 32.8549 35.122 33.6086 35.122 34.4297V55.1167C35.122 56.8018 37.1093 57.8706 38.7348 57.0596L55.8079 48.5411C56.5882 48.1518 57.0732 47.4071 57.0732 46.5981V26.2154ZM52.1235 21.9057C55.6980 20.1863 60 22.5407 60 26.2154V46.5981C60 48.3778 58.9331 50.0162 57.2165 50.8807L40.1433 59.3912C36.5673 61.1754 32.1951 58.824 32.1951 55.1167V34.4297C32.1951 32.6234 33.2938 30.9651 35.0504 30.12L52.1235 21.9057Z"
                    fill="#121212"
                  />
                </svg>

                <p className="pt-4 text-base text-tertiary">
                  Established in 1995, NEXIN has been leading force in the
                  digital landscape for over two decades. We're a passionate
                </p>

                <button className="absolute bottom-0 right-0 flex h-12 w-12 translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full border border-gray-400 bg-white transition-all duration-300 hover:bg-gray-100">
                  <ArrowDownRightIcon className="h-8 w-8 text-gray-600" />
                </button>
              </div>
              <div className="relative flex w-1/3 flex-col space-y-4 border-2 border-accent p-10 text-left">
                <p className="flex items-center gap-2 text-sm text-tertiary">
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="3" r="2.5" fill="#797E88" />
                  </svg>
                  Brand Strategy
                </p>

                <h2 className="font-marcellus text-3xl">
                  Branding and <br /> Creative Services
                </h2>

                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.1426 22.9837V37.0149H48.8252C54.9856 37.0149 60 42.1716 60 48.5068C60 54.8421 54.9842 60 48.8252 60C42.6649 60 37.6492 54.842 37.6492 48.5068V39.5805H22.3521V48.5081C22.3521 54.8421 17.3376 60 11.1773 60H11.1748C5.01454 60 0 54.8421 0 48.5081C0 42.1747 5.01661 37.0163 11.1773 37.0163H19.8586V22.9851H11.1773C5.01545 22.9851 0 17.8268 0 11.4932C0 5.15827 5.01673 0 11.1773 0C17.3375 0 22.3521 5.15776 22.3521 11.4932V20.4208H37.6492V11.4919C37.6492 5.15695 42.6646 0 48.8252 0C54.9858 0 60 5.15564 60 11.4906C60 17.8259 54.9842 22.9837 48.8252 22.9837H40.1426ZM40.1426 11.4919V20.4208H48.8252C53.6146 20.4208 57.5065 16.4162 57.5065 11.4919C57.5065 6.56707 53.6141 2.56424 48.8252 2.56424C44.0353 2.56424 40.1426 6.56681 40.1426 11.4919ZM11.1773 20.4208H19.8599V11.4932C19.8599 6.56732 15.9678 2.56424 11.1786 2.56424C6.38892 2.56424 2.49477 6.56656 2.49477 11.4932C2.49477 16.4176 6.38986 20.4191 11.1773 20.4208ZM19.8586 48.5068V39.5792H11.1773C6.38788 39.5792 2.49349 43.5812 2.49349 48.5068C2.49349 53.4316 6.38587 57.4344 11.1748 57.4344C15.9643 57.4344 19.8586 53.4324 19.8586 48.5068ZM37.6492 22.9837H22.3521V37.0149H37.6492V22.9837ZM48.8252 39.5792H40.1426V48.5055C40.1426 53.4316 44.035 57.4344 48.8252 57.4344C53.6144 57.4344 57.5065 53.4314 57.5065 48.5055C57.5065 43.5818 53.6139 39.5792 48.8252 39.5792Z"
                    fill="#121212"
                  />
                </svg>

                <p className="pt-4 text-base text-tertiary">
                  Established in 1995, NEXIN has been leading force in the
                  digital landscape for over two decades. We're a passionate
                </p>

                <button className="absolute bottom-0 right-0 flex h-12 w-12 translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full bg-accent transition-all duration-300 hover:bg-gray-100">
                  <ArrowRightIcon className="h-8 w-8 text-gray-600" />
                </button>
              </div>
              <div className="relative flex w-1/3 flex-col space-y-4 border-2 border-secondary p-10 text-left">
                <p className="flex items-center gap-2 text-sm text-tertiary">
                  <svg
                    width="5"
                    height="6"
                    viewBox="0 0 5 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="3" r="2.5" fill="#797E88" />
                  </svg>
                  Identity Build
                </p>

                <h2 className="font-marcellus text-3xl">
                  Creative Digital <br /> Agency
                </h2>

                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.0483 22.2266C38.0483 22.9324 37.4867 23.5045 36.7939 23.5045H18.8148C18.1221 23.5045 17.5605 22.9324 17.5605 22.2266C17.5605 21.5208 18.1221 20.9487 18.8148 20.9487H36.7939C37.4867 20.9487 38.0483 21.5208 38.0483 22.2266Z"
                    fill="#121212"
                  />
                  <path
                    d="M18.8148 39.1594C18.1221 39.1594 17.5605 38.5880 17.5605 37.8814C17.5605 37.1757 18.1221 36.6035 18.8148 36.6035H26.55C27.2428 36.6035 27.8044 37.1757 27.8044 37.8814C27.8044 38.5880 27.2428 39.1594 26.55 39.1594H18.8148Z"
                    fill="#121212"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M51.9512 19.6047C51.9512 16.2805 50.2355 13.2012 47.434 11.4980L30.8064 1.33498C27.8 -0.445009 24.1507 -0.444991 21.2243 1.33502L4.51718 11.4980C1.71566 13.2012 1.03467e-06 16.2805 8.92043e-07 19.6046L0 40.3957C-1.42625e-07 43.7199 1.71580 46.7993 4.5173 48.5033L21.2244 58.6651C24.1508 60.445 27.7999 60.445 30.8063 58.6651L47.4338 48.5033C50.2355 46.7993 51.9512 43.7199 51.9512 40.3957V31.7041H58.7456C59.4384 31.7041 60 31.1319 60 30.4261C60 29.8004 59.4384 29.1482 58.7456 29.1482H51.9512V19.6047ZM49.0244 29.1482V19.6047C49.0244 17.3302 47.8505 15.2233 45.9336 14.0574L29.2261 3.89524C27.2238 2.67736 24.8069 2.67737 22.8046 3.89527L6.01753 14.0574C4.1007 15.2233 2.92683 17.3302 2.92683 19.6046V40.3957C2.92683 42.6702 4.10074 44.7771 6.01762 45.943L22.8047 56.1048C24.807 57.3226 27.2238 57.3226 29.226 56.1048L45.9336 45.943C47.8505 44.7771 49.0244 42.6702 49.0244 40.3957V31.7041H18.8153C18.1226 31.7041 17.561 31.1319 17.561 30.4261C17.561 29.8004 18.1226 29.1482 18.8153 29.1482H49.0244Z"
                    fill="#121212"
                  />
                </svg>

                <p className="pt-4 text-base text-tertiary">
                  Established in 1995, NEXIN has been leading force in the
                  digital landscape for over two decades. We're a passionate
                </p>

                <button className="absolute bottom-0 right-0 flex h-12 w-12 translate-x-1/2 translate-y-1/2 transform items-center justify-center rounded-full border border-gray-400 bg-white transition-all duration-300 hover:bg-gray-100">
                  <ArrowDownRightIcon className="h-8 w-8 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="mx-auto flex w-[1220px] flex-row gap-6 pt-8">
              <div className="flex h-80 w-80 items-center justify-center rounded-full border border-gray-300">
                <div className="bg-white px-2 text-center">
                  <p className="text-4xl font-bold text-gray-800 md:text-5xl">
                    35k+
                  </p>
                  <p className="mt-2 font-marcellus text-xl text-gray-500">
                    Project Complete
                  </p>
                </div>
              </div>

              <div className="-ml-8 flex h-80 w-80 items-center justify-center rounded-full border border-gray-300 sm:-ml-12">
                <div className="bg-white px-2 text-center">
                  <p className="text-4xl font-bold text-gray-800 md:text-5xl">
                    10k+
                  </p>
                  <p className="mt-2 font-marcellus text-xl text-gray-500">
                    Happy Customers
                  </p>
                </div>
              </div>

              <div className="-ml-8 flex h-80 w-80 items-center justify-center rounded-full border border-gray-300 sm:-ml-12">
                <div className="bg-white px-2 text-center">
                  <p className="text-4xl font-bold text-gray-800 md:text-5xl">
                    25+
                  </p>
                  <p className="mt-2 font-marcellus text-xl text-gray-500">
                    Years Experiences
                  </p>
                </div>
              </div>

              <div className="-ml-8 flex h-80 w-80 items-center justify-center rounded-full border border-gray-300 sm:-ml-12">
                <div className="bg-white px-2 text-center">
                  <p className="text-4xl font-bold text-gray-800 md:text-5xl">
                    88
                  </p>
                  <p className="mt-2 font-marcellus text-xl text-gray-500">
                    Awards Achievement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <img src={bannerMain3} alt="" className="h-auto w-full" />

        <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary text-lg font-bold text-white transition-transform duration-300 hover:scale-110">
          <p className="text-base font-bold text-background">PLAY VIDEO</p>
        </div>
      </section>
      <section>
        <div className="mx-auto flex w-[1220px] gap-6 pt-28">
          <div className="flex w-full flex-col items-center space-y-4">
            <svg
              width="130"
              height="16"
              viewBox="0 0 140 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" fill="#121212" />
              <circle cx="16" cy="8" r="7.5" stroke="#FF6633" />
              <path
                d="M43.376 14L40.176 2.08H42.512L45.024 12.24H44.416L47.04 2.08H49.296L51.904 12.24H51.296L53.808 2.08H56.144L52.944 14H50.448L47.808 4.112H48.512L45.872 14H43.376ZM63.024 14.192C62.1493 14.192 61.3333 14.0373 60.576 13.728C59.8187 13.4187 59.1573 12.9867 58.592 12.432C58.0267 11.8773 57.584 11.2267 57.264 10.48C56.9547 9.72267 56.8 8.90667 56.8 8.032C56.8 7.14667 56.9547 6.33067 57.264 5.584C57.5733 4.83733 58.0107 4.18667 58.576 3.632C59.1413 3.07733 59.8027 2.65067 60.56 2.352C61.3173 2.04267 62.1387 1.888 63.024 1.888C63.9093 1.888 64.7307 2.04267 65.488 2.352C66.2453 2.66133 66.9067 3.09333 67.472 3.648C68.0373 4.192 68.4747 4.83733 68.784 5.584C69.104 6.33067 69.264 7.14667 69.264 8.032C69.264 8.90667 69.104 9.72267 68.784 10.48C68.464 11.2267 68.0213 11.8773 67.456 12.432C66.8907 12.9867 66.2293 13.4187 65.472 13.728C64.7253 14.0373 63.9093 14.192 63.024 14.192ZM63.024 12.208C63.6107 12.208 64.1493 12.1067 64.64 11.904C65.1307 11.6907 65.5573 11.3973 65.92 11.024C66.2933 10.6507 66.576 10.208 66.768 9.696C66.9707 9.184 67.072 8.62933 67.072 8.032C67.072 7.43467 66.9707 6.88533 66.768 6.384C66.576 5.872 66.2933 5.42933 65.92 5.056C65.5573 4.672 65.1307 4.37867 64.64 4.176C64.1493 3.97333 63.6107 3.872 63.024 3.872C62.448 3.872 61.9147 3.97333 61.424 4.176C60.9333 4.37867 60.5013 4.672 60.128 5.056C59.7653 5.42933 59.4827 5.872 59.28 6.384C59.0773 6.88533 58.976 7.43467 58.976 8.032C58.976 8.62933 59.0773 9.184 59.28 9.696C59.4827 10.208 59.7653 10.6507 60.128 11.024C60.5013 11.3973 60.9333 11.6907 61.424 11.904C61.9147 12.1067 62.448 12.208 63.024 12.208ZM71.1989 14V2.08H75.6309C76.4415 2.08 77.1562 2.22933 77.7749 2.528C78.4042 2.816 78.8949 3.24267 79.2469 3.808C79.5989 4.36267 79.7749 5.04 79.7749 5.84C79.7749 6.66133 79.5775 7.36 79.1829 7.936C78.7989 8.512 78.2762 8.93867 77.6149 9.216L80.3509 14H77.8869L74.9589 8.768L76.3669 9.6H73.3749V14H71.1989ZM73.3749 7.68H75.6629C76.0575 7.68 76.3989 7.60533 76.6869 7.456C76.9749 7.296 77.1989 7.07733 77.3589 6.8C77.5189 6.52267 77.5989 6.20267 77.5989 5.84C77.5989 5.46667 77.5189 5.14667 77.3589 4.88C77.1989 4.60267 76.9749 4.38933 76.6869 4.24C76.3989 4.08 76.0575 4 75.6629 4H73.3749V7.68ZM81.777 14V2.08H83.953V8.288L83.361 8.08L88.433 2.08H91.169L86.417 7.712L86.545 6.176L91.313 14H88.753L85.553 8.752L83.953 10.656V14H81.777ZM92.6364 14V2.08H100.588V4H94.8124V7.296H99.8684V9.216H94.8124V14H92.6364ZM102.011 14V2.08H104.187V12.08H109.291V14H102.011ZM116.258 14.192C115.384 14.192 114.568 14.0373 113.81 13.728C113.053 13.4187 112.392 12.9867 111.826 12.432C111.261 11.8773 110.818 11.2267 110.498 10.48C110.189 9.72267 110.034 8.90667 110.034 8.032C110.034 7.14667 110.189 6.33067 110.498 5.584C110.808 4.83733 111.245 4.18667 111.81 3.632C112.376 3.07733 113.037 2.65067 113.794 2.352C114.552 2.04267 115.373 1.888 116.258 1.888C117.144 1.888 117.965 2.04267 118.722 2.352C119.48 2.66133 120.141 3.09333 120.706 3.648C121.272 4.192 121.709 4.83733 122.018 5.584C122.338 6.33067 122.498 7.14667 122.498 8.032C122.498 8.90667 122.338 9.72267 122.018 10.48C121.698 11.2267 121.256 11.8773 120.69 12.432C120.125 12.9867 119.464 13.4187 118.706 13.728C117.96 14.0373 117.144 14.192 116.258 14.192ZM116.258 12.208C116.845 12.208 117.384 12.1067 117.874 11.904C118.365 11.6907 118.792 11.3973 119.154 11.024C119.528 10.6507 119.81 10.208 120.002 9.696C120.205 9.184 120.306 8.62933 120.306 8.032C120.306 7.43467 120.205 6.88533 120.002 6.384C119.81 5.872 119.528 5.42933 119.154 5.056C118.792 4.672 118.365 4.37867 117.874 4.176C117.384 3.97333 116.845 3.872 116.258 3.872C115.682 3.872 115.149 3.97333 114.658 4.176C114.168 4.37867 113.736 4.672 113.362 5.056C113 5.42933 112.717 5.872 112.514 6.384C112.312 6.88533 112.21 7.43467 112.21 8.032C112.21 8.62933 112.312 9.184 112.514 9.696C112.717 10.208 113 10.6507 113.362 11.024C113.736 11.3973 114.168 11.6907 114.658 11.904C115.149 12.1067 115.682 12.208 116.258 12.208ZM126.345 14L123.145 2.08H125.481L127.993 12.24H127.385L130.009 2.08H132.265L134.873 12.24H134.265L136.777 2.08H139.113L135.913 14H133.417L130.777 4.112H131.481L128.841 14H126.345Z"
                fill="#797E88"
              />
            </svg>
            <h2 className="font-marcellus text-6xl">How we work</h2>
          </div>
        </div>
        <div className="mx-auto flex w-[1220px] flex-row gap-8 pt-12">
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <div className="flex flex-shrink-0 items-center justify-center">
                <img
                  src={icon1}
                  alt="Research and Strategy"
                  className="h-24 w-24"
                />
              </div>

              <div className="h-px flex-grow bg-gray-400"></div>

              <span className="text-5xl font-bold text-gray-200">01</span>
            </div>

            <div className="mt-6">
              <h3 className="font-marcellus text-2xl text-background">
                Research and Strategy
              </h3>
              <p className="mt-4 leading-relaxed text-tertiary">
                Conduct thorough market of the research to the fast target
                audience behaviors. Submit as many design tasks.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-4">
              <div className="flex flex-shrink-0 items-center justify-center">
                <img
                  src={icon2}
                  alt="Research and Strategy"
                  className="h-24 w-24"
                />
              </div>

              <div className="h-px flex-grow bg-gray-400"></div>

              <span className="text-5xl font-bold text-gray-200">02</span>
            </div>

            <div className="mt-6">
              <h3 className="font-marcellus text-2xl text-background">
                Plan Customization
              </h3>
              <p className="mt-4 leading-relaxed text-tertiary">
                Conduct thorough market of the research to the fast target
                audience behaviors. Submit as many design tasks.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <div className="flex flex-shrink-0 items-center justify-center">
                <img
                  src={icon3}
                  alt="Research and Strategy"
                  className="h-24 w-24"
                />
              </div>

              <div className="h-px flex-grow bg-gray-400"></div>

              <span className="text-5xl font-bold text-gray-200">03</span>
            </div>

            <div className="mt-6">
              <h3 className="font-marcellus text-2xl text-background">
                Finished & User Testing
              </h3>
              <p className="mt-4 leading-relaxed text-tertiary">
                Conduct thorough market of the research to the fast target
                audience behaviors. Submit as many design tasks.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 bg-alternative2 py-24">
        <div className="mx-auto flex w-[1220px] flex-row gap-12">
          <div className="flex w-7/12 flex-col space-y-8">
            <div>
              <div className="w-3/2 ml-12">
                <p className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-500">
                  <svg
                    width="208"
                    height="16"
                    viewBox="0 0 208 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#121212" />
                    <circle cx="16" cy="8" r="7.5" stroke="#FF6633" />
                    <path
                      d="M43.376 14L40.176 2.08H42.512L45.024 12.24H44.416L47.04 2.08H49.296L51.904 12.24H51.296L53.808 2.08H56.144L52.944 14H50.448L47.808 4.112H48.512L45.872 14H43.376ZM57.4645 14V2.08H59.6405V7.28H64.7125V2.08H66.9045V14H64.7125V9.2H59.6405V14H57.4645ZM68.2229 14L72.3349 2.08H75.1509L79.2629 14H76.8949L76.0469 11.44H71.4389L70.5749 14H68.2229ZM72.0629 9.52H75.4229L73.4389 3.584H74.0469L72.0629 9.52ZM81.9046 14V4H78.8166V2.08H87.1366V4H84.0966V14H81.9046ZM95.5643 14.192C94.8069 14.192 94.1029 14.0533 93.4523 13.776C92.8123 13.4987 92.2576 13.1147 91.7883 12.624C91.3296 12.1227 90.9936 11.5413 90.7803 10.88L92.5883 10.096C92.8763 10.7787 93.2923 11.3173 93.8363 11.712C94.3803 12.096 94.9936 12.288 95.6763 12.288C96.0603 12.288 96.3909 12.2293 96.6683 12.112C96.9563 11.984 97.1749 11.8133 97.3243 11.6C97.4843 11.3867 97.5643 11.1307 97.5643 10.832C97.5643 10.48 97.4576 10.192 97.2443 9.968C97.0416 9.73333 96.7323 9.552 96.3163 9.424L94.0283 8.688C93.1003 8.4 92.4016 7.968 91.9323 7.392C91.4629 6.816 91.2283 6.13867 91.2283 5.36C91.2283 4.67733 91.3936 4.07467 91.7243 3.552C92.0656 3.02933 92.5349 2.624 93.1323 2.336C93.7403 2.03733 94.4336 1.888 95.2123 1.888C95.9269 1.888 96.5829 2.016 97.1803 2.272C97.7776 2.51733 98.2896 2.864 98.7163 3.312C99.1536 3.74933 99.4789 4.26667 99.6923 4.864L97.9003 5.664C97.6656 5.06667 97.3136 4.608 96.8443 4.288C96.3749 3.95733 95.8309 3.792 95.2123 3.792C94.8496 3.792 94.5296 3.856 94.2523 3.984C93.9749 4.10133 93.7563 4.272 93.5963 4.496C93.4469 4.70933 93.3723 4.96533 93.3723 5.264C93.3723 5.59467 93.4789 5.888 93.6923 6.144C93.9056 6.38933 94.2309 6.58133 94.6683 6.72L96.8603 7.408C97.8096 7.71733 98.5189 8.144 98.9883 8.688C99.4683 9.232 99.7083 9.904 99.7083 10.704C99.7083 11.3867 99.5323 11.9893 99.1803 12.512C98.8283 13.0347 98.3429 13.4453 97.7243 13.744C97.1056 14.0427 96.3856 14.192 95.5643 14.192ZM101.668 14V2.08H109.588V4H103.844V7.056H109.268V8.976H103.844V12.08H109.588V14H101.668ZM113.295 14V4H110.207V2.08H118.527V4H115.487V14H113.295ZM124.111 14.192C123.354 14.192 122.65 14.0533 121.999 13.776C121.359 13.4987 120.804 13.1147 120.335 12.624C119.876 12.1227 119.54 11.5413 119.327 10.88L121.135 10.096C121.423 10.7787 121.839 11.3173 122.383 11.712C122.927 12.096 123.54 12.288 124.223 12.288C124.607 12.288 124.938 12.2293 125.215 12.112C125.503 11.984 125.722 11.8133 125.871 11.6C126.031 11.3867 126.111 11.1307 126.111 10.832C126.111 10.48 126.004 10.192 125.791 9.968C125.588 9.73333 125.279 9.552 124.863 9.424L122.575 8.688C121.647 8.4 120.948 7.968 120.479 7.392C120.01 6.816 119.775 6.13867 119.775 5.36C119.775 4.67733 119.94 4.07467 120.271 3.552C120.612 3.02933 121.082 2.624 121.679 2.336C122.287 2.03733 122.98 1.888 123.759 1.888C124.474 1.888 125.13 2.016 125.727 2.272C126.324 2.51733 126.836 2.864 127.263 3.312C127.7 3.74933 128.026 4.26667 128.239 4.864L126.447 5.664C126.212 5.06667 125.86 4.608 125.391 4.288C124.922 3.95733 124.378 3.792 123.759 3.792C123.396 3.792 123.076 3.856 122.799 3.984C122.522 4.10133 122.303 4.272 122.143 4.496C121.994 4.70933 121.919 4.96533 121.919 5.264C121.919 5.59467 122.026 5.888 122.239 6.144C122.452 6.38933 122.778 6.58133 123.215 6.72L125.407 7.408C126.356 7.71733 127.066 8.144 127.535 8.688C128.015 9.232 128.255 9.904 128.255 10.704C128.255 11.3867 128.079 11.9893 127.727 12.512C127.375 13.0347 126.89 13.4453 126.271 13.744C125.652 14.0427 124.932 14.192 124.111 14.192ZM137.65 14.192C136.733 14.192 135.917 14 135.202 13.616C134.498 13.232 133.944 12.704 133.538 12.032C133.133 11.36 132.93 10.5973 132.93 9.744V2.08H135.106V9.632C135.106 10.1227 135.213 10.5653 135.426 10.96C135.65 11.3547 135.954 11.664 136.338 11.888C136.722 12.1013 137.16 12.208 137.65 12.208C138.152 12.208 138.589 12.1013 138.962 11.888C139.346 11.664 139.645 11.3547 139.858 10.96C140.082 10.5653 140.194 10.1227 140.194 9.632V2.08H142.37V9.744C142.37 10.5973 142.168 11.36 141.762 12.032C141.357 12.704 140.797 13.232 140.082 13.616C139.378 14 138.568 14.192 137.65 14.192ZM148.799 14.192C148.041 14.192 147.337 14.0533 146.687 13.776C146.047 13.4987 145.492 13.1147 145.023 12.624C144.564 12.1227 144.228 11.5413 144.015 10.88L145.823 10.096C146.111 10.7787 146.527 11.3173 147.071 11.712C147.615 12.096 148.228 12.288 148.911 12.288C149.295 12.288 149.625 12.2293 149.903 12.112C150.191 11.984 150.409 11.8133 150.559 11.6C150.719 11.3867 150.799 11.1307 150.799 10.832C150.799 10.48 150.692 10.192 150.479 9.968C150.276 9.73333 149.967 9.552 149.551 9.424L147.263 8.688C146.335 8.4 145.636 7.968 145.167 7.392C144.697 6.816 144.463 6.13867 144.463 5.36C144.463 4.67733 144.628 4.07467 144.959 3.552C145.3 3.02933 145.769 2.624 146.367 2.336C146.975 2.03733 147.668 1.888 148.447 1.888C149.161 1.888 149.817 2.016 150.415 2.272C151.012 2.51733 151.524 2.864 151.951 3.312C152.388 3.74933 152.713 4.26667 152.927 4.864L151.135 5.664C150.9 5.06667 150.548 4.608 150.079 4.288C149.609 3.95733 149.065 3.792 148.447 3.792C148.084 3.792 147.764 3.856 147.487 3.984C147.209 4.10133 146.991 4.272 146.831 4.496C146.681 4.70933 146.607 4.96533 146.607 5.264C146.607 5.59467 146.713 5.888 146.927 6.144C147.14 6.38933 147.465 6.58133 147.903 6.72L150.095 7.408C151.044 7.71733 151.753 8.144 152.223 8.688C152.703 9.232 152.943 9.904 152.943 10.704C152.943 11.3867 152.767 11.9893 152.415 12.512C152.063 13.0347 151.577 13.4453 150.959 13.744C150.34 14.0427 149.62 14.192 148.799 14.192ZM156.77 14L160.882 2.08H163.698L167.81 14H165.442L164.594 11.44H159.986L159.122 14H156.77ZM160.61 9.52H163.97L161.986 3.584H162.594L160.61 9.52ZM169.136 14V2.08H173.584C174.395 2.08 175.11 2.22933 175.728 2.528C176.358 2.816 176.848 3.24267 177.2 3.808C177.552 4.36267 177.728 5.04 177.728 5.84C177.728 6.62933 177.547 7.30667 177.184 7.872C176.832 8.42667 176.347 8.85333 175.728 9.152C175.11 9.45067 174.395 9.6 173.584 9.6H171.312V14H169.136ZM171.312 7.68H173.616C174.011 7.68 174.352 7.60533 174.64 7.456C174.928 7.296 175.152 7.07733 175.312 6.8C175.472 6.52267 175.552 6.20267 175.552 5.84C175.552 5.46667 175.472 5.14667 175.312 4.88C175.152 4.60267 174.928 4.38933 174.64 4.24C174.352 4.08 174.011 4 173.616 4H171.312V7.68ZM177.582 14L181.694 2.08H184.51L188.622 14H186.254L185.406 11.44H180.798L179.934 14H177.582ZM181.422 9.52H184.782L182.798 3.584H183.406L181.422 9.52ZM189.949 14V2.08H194.381C195.192 2.08 195.906 2.22933 196.525 2.528C197.154 2.816 197.645 3.24267 197.997 3.808C198.349 4.36267 198.525 5.04 198.525 5.84C198.525 6.66133 198.328 7.36 197.933 7.936C197.549 8.512 197.026 8.93867 196.365 9.216L199.101 14H196.637L193.709 8.768L195.117 9.6H192.125V14H189.949ZM192.125 7.68H194.413C194.808 7.68 195.149 7.60533 195.437 7.456C195.725 7.296 195.949 7.07733 196.109 6.8C196.269 6.52267 196.349 6.20267 196.349 5.84C196.349 5.46667 196.269 5.14667 196.109 4.88C195.949 4.60267 195.725 4.38933 195.437 4.24C195.149 4.08 194.808 4 194.413 4H192.125V7.68ZM202.327 14V4H199.239V2.08H207.559V4H204.519V14H202.327Z"
                      fill="#797E88"
                    />
                  </svg>
                </p>

                <h1 className="mt-4 font-marcellus text-5xl leading-tight text-background">
                  Driving Digital Success With Strategy Design
                </h1>
                <p className="mt-6 max-w-md leading-relaxed text-tertiary">
                  We Believe That The Surest Measure Of Success Is When Our
                  Partners With Us More Than Half It's More Than Just The
                  Visuals.
                </p>
              </div>
            </div>
            <div className="w-3/2 flex-grow">
              <img
                src={image1}
                alt="Team working on a laptop"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="flex w-3/12 flex-col gap-10">
            <div>
              <img
                src={image2}
                alt="Office meeting"
                className="w-full object-cover"
              />
            </div>

            <div className="flex flex-col space-y-24">
              <p className="text-tertiary">
                Conduct thorough market research to the fast target audience
                behaviours. Submit as many design tasks
              </p>
              <div className="flex h-36 w-36 cursor-pointer items-center justify-center rounded-full border border-gray-400 transition hover:bg-gray-100">
                <span className="flex items-center gap-2 font-semibold">
                  Contact Us <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-1/3 flex-col space-y-4 pt-10 text-tertiary">
            <p className="">
              We believe that the surest measure of success is when our partners
              with us more than half It's more than just the visuals. We're here
              to support your growth.
            </p>
            <p>
              We believe that the surest measure of success is when our partners
              with us more than half It's more than just the visuals.{' '}
            </p>
            <div className="flex flex-col space-y-2 pt-[62px]">
              <h2 className="font-marcellus text-xl text-background">
                Our Mission
              </h2>
              <p className="text-base text-tertiary">
                Conduct thorough market research to the fast target audience
                behaviours.
              </p>
            </div>
            <div className="flex flex-row items-center gap-4 pt-16">
              {' '}
              <div className="relative flex h-44 flex-col items-center justify-end rounded-[40px] bg-accent px-10 pb-8">
                <img
                  src={image4}
                  alt="Marketing"
                  className="absolute left-1/2 top-[-3rem] h-32 w-32 -translate-x-1/2 rounded-full object-cover"
                />

                <p className="text-center text-sm font-semibold text-background">
                  Marketing <br /> Strategy
                </p>
              </div>
              <div className="relative flex h-44 flex-col items-center justify-end rounded-[40px] bg-accent px-12 pb-8">
                <img
                  src={image5}
                  alt="Marketing"
                  className="absolute left-1/2 top-[-3rem] h-32 w-32 -translate-x-1/2 rounded-full object-cover"
                />

                <p className="text-center text-sm font-semibold text-background">
                  UX/UI <br /> Solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-row items-center justify-between">
            <div className="space-y-4">
              <h2 className="font-gallery text-7xl leading-tight text-primary">
                Let's Create <br /> Something Great
              </h2>
              <p className="text-sm text-primary">
                We shift you from today's reality to tomorrow's potential,
                ensuring
              </p>
            </div>

            <div className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-full bg-accent">
              <span className="flex items-center gap-2 font-semibold">
                Let's Talk <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
