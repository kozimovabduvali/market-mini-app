function App() {
  return (
    <main className="bg-[#6F9AFA]">
      {/* ==== Navbar ==== */}
      <nav className="flex items-center justify-between gap-5 w-full max-w-93.75 mx-auto pt-6.25 px-3.5">
        {/* Burger button */}
        <button>
          <svg
            width={26}
            height={21}
            viewBox="0 0 26 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.39254 2.7382C1.02322 2.7382 0.669019 2.59395 0.407866 2.3372C0.146714 2.08044 0 1.73221 0 1.3691C0 1.00599 0.146714 0.65776 0.407866 0.401005C0.669019 0.14425 1.02322 6.89966e-06 1.39254 6.89966e-06H24.6075C24.7905 -0.000565291 24.9718 0.0344568 25.1411 0.103058C25.3103 0.171658 25.464 0.272483 25.5934 0.399729C25.7229 0.526976 25.8254 0.678131 25.8952 0.844495C25.965 1.01086 26.0006 1.18915 26 1.3691C26.0006 1.54905 25.965 1.72734 25.8952 1.89371C25.8254 2.06007 25.7229 2.21123 25.5934 2.33847C25.464 2.46572 25.3103 2.56654 25.1411 2.63514C24.9718 2.70375 24.7905 2.73877 24.6075 2.7382H1.39254Z"
              fill="white"
            />
            <path
              d="M1.39254 11.8669C1.20951 11.8675 1.02817 11.8325 0.858952 11.7639C0.689738 11.6953 0.535994 11.5945 0.406569 11.4672C0.277143 11.34 0.174592 11.1888 0.104816 11.0224C0.0350403 10.8561 -0.000581648 10.6778 3.42107e-07 10.4978C3.42107e-07 10.1347 0.146714 9.78649 0.407867 9.52974C0.669019 9.27298 1.02322 9.12874 1.39254 9.12874H24.6075C24.9764 9.12988 25.3299 9.27449 25.5908 9.531C25.8518 9.78751 25.9988 10.1351 26 10.4978C26 10.8609 25.8533 11.2092 25.5921 11.4659C25.331 11.7227 24.9768 11.8669 24.6075 11.8669H1.39254Z"
              fill="white"
            />
            <path
              d="M1.39254 21C1.2093 21 1.02786 20.9644 0.85862 20.8954C0.689381 20.8263 0.535672 20.7251 0.406305 20.5975C0.276938 20.4699 0.174456 20.3184 0.104734 20.1518C0.0350116 19.9852 -0.000579584 19.8067 2.97668e-07 19.6266C2.97668e-07 19.2635 0.146714 18.9152 0.407867 18.6585C0.669019 18.4017 1.02322 18.2575 1.39254 18.2575H24.6075C24.9768 18.2575 25.331 18.4017 25.5921 18.6585C25.8533 18.9152 26 19.2635 26 19.6266C26.0006 19.8067 25.965 19.9852 25.8953 20.1518C25.8255 20.3184 25.7231 20.4699 25.5937 20.5975C25.4643 20.7251 25.3106 20.8263 25.1414 20.8954C24.9721 20.9644 24.7907 21 24.6075 21H1.39254Z"
              fill="white"
            />
          </svg>
        </button>

        {/* Location */}
        <a href="#" className="text-white flex items-center gap-1 text-[15px]">
          <svg
            width={5}
            height={8}
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.48057 5.75492C1.00319 5.2499 0.563802 4.84299 0.198339 4.37804C-0.120146 3.9732 -0.0400076 3.35074 0.330982 2.97768C1.22495 2.07956 2.12721 1.18905 3.03914 0.313734C3.5027 -0.129796 4.21359 -0.0917982 4.66196 0.356567C4.76863 0.462348 4.85331 0.588205 4.91109 0.726878C4.96887 0.865551 4.99862 1.01429 4.99862 1.16452C4.99862 1.31475 4.96887 1.4635 4.91109 1.60217C4.85331 1.74084 4.76863 1.8667 4.66196 1.97248C3.9635 2.69028 3.24294 3.38666 2.53343 4.09341C2.08161 4.54523 1.55104 4.94316 1.48057 5.75492Z"
              fill="white"
            />
            <path
              d="M3.12282 4.04574C3.72525 4.653 4.25997 5.15733 4.75186 5.70034C5.11387 6.10034 5.06481 6.75113 4.70212 7.15597C4.32905 7.57049 3.67136 7.70866 3.23336 7.37774C2.84863 7.08882 2.50327 6.75089 2.20605 6.37254C1.87513 5.94974 1.96011 5.36044 2.32626 4.94454C2.57497 4.65991 2.82782 4.37735 3.12282 4.04574Z"
              fill="white"
            />
          </svg>
          <span>Город</span>
        </a>
      </nav>

      {/* ==== Greeting section ==== */}
      <section className="font-nt-somic relative w-full max-w-93.75 mx-auto mb-4 px-3.5 pt-22.5">
        <div className="relative z-10">
          <h1 className="font-nt-somic font-bold leading-[140%] text-white text-[35px]">
            Привет, %username%
          </h1>

          <div className="flex items-center justify-between gap-5">
            {/* Search input */}
            <div className="relative w-full max-w-69.5 min-h-10">
              <div className="size-7.5 absolute z-10 top-1/2 -translate-y-1/2 left-3.5">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3135 0.5C18.838 0.5 24.1278 5.78865 24.1279 12.3135C24.1279 14.4763 23.5441 16.5017 22.5293 18.2451L28.6904 24.4062L28.8799 24.6162C29.7652 25.7015 29.7022 27.3015 28.6914 28.3135L28.6904 28.3145C28.1501 28.8532 27.4424 29.1221 26.7363 29.1221C26.1194 29.122 25.4999 28.9164 24.9932 28.5039L24.7832 28.3135L18.7129 22.2422C16.869 23.4329 14.6726 24.127 12.3135 24.127C5.7887 24.1268 0.5 18.8386 0.5 12.3135C0.500179 5.78878 5.78903 0.500178 12.3135 0.5ZM12.3135 5.16602C8.36631 5.16619 5.16602 8.36699 5.16602 12.3145C5.16611 16.2618 8.36635 19.4617 12.3135 19.4619C16.261 19.4619 19.4608 16.2619 19.4609 12.3145C19.4609 8.36687 16.261 5.16602 12.3135 5.16602Z"
                    stroke="white"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Найди что тебе по вкусу"
                className="bg-[#7DA6FF] text-white placeholder:text-white rounded-[10px] w-full min-h-10 outline-none py-1.5 pr-2 pl-15"
              />
            </div>

            <img src="/img/qr.svg" alt="qr icon" className="size-7.5" />
          </div>
        </div>

        <img
          src="/img/asterisk.svg"
          alt="icon"
          className="absolute z-0 top-7 right-4 size-35 object-fill"
        />
      </section>

      {/* ==== Categories ==== */}
      <section className="inner-curve-section relative">
        <div className="relative inner-curve !rounded-b-none">
          <div className="w-full max-w-93.75 mx-auto mb-3.5 px-3.5 pt-12.5">
            <div className="flex items-center justify-between gap-5 mb-4">
              <h4 className="font-bold text-[21px] text-black">Категориии</h4>
              <button className="text-[#6F9AFA]">Все</button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              {["burger", "pizza", "sushi", "shawarma"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="cursor-pointer size-17.5 flex items-center justify-center bg-[#EBF1FF] rounded-[5px]"
                >
                  <img src={`/img/${item}.svg`} alt={item} className="w-11" />
                </a>
              ))}
            </div>

            <div className="font-nt-somic space-y-8.5 mb-10">
              {/* 1 */}
              <div className="relative bg-[#d0c3fd] overflow-hidden rounded-[40px] pt-5 pr-5 pb-5 pl-6">
                <div className="relative z-20">
                  <div className="flex justify-between gap-5 mb-20">
                    <div>
                      <h4 className="font-bold leading-[120%] text-[25px] mb-1.5">
                        Название Заведения
                      </h4>
                      <div className="text-[15px] text-[#090909]/80 flex items-center gap-1">
                        <svg
                          width={11}
                          height={18}
                          viewBox="0 0 11 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.3893 0.359748L6.68932 7.65013H10.6838C10.7431 7.6501 10.8012 7.66654 10.8518 7.69765C10.9025 7.72876 10.9437 7.77334 10.971 7.82654C10.9983 7.87973 11.0106 7.93948 11.0066 7.99926C11.0025 8.05904 10.9823 8.11656 10.9482 8.16552L4.18992 17.8847C4.1466 17.9393 4.08702 17.9783 4.02005 17.9958C3.95307 18.0134 3.88227 18.0087 3.81817 17.9823C3.75407 17.956 3.70009 17.9094 3.66426 17.8496C3.62843 17.7897 3.61266 17.7198 3.61929 17.6501L4.31927 10.3597H0.324802C0.264425 10.36 0.205179 10.3432 0.153772 10.3112C0.102364 10.2792 0.060849 10.2332 0.0339266 10.1786C0.00700426 10.124 -0.00424987 10.0628 0.00143845 10.002C0.00712678 9.94126 0.0295303 9.88331 0.0661125 9.83475L6.81486 0.125133C6.84586 0.0851872 6.88563 0.0530897 6.93103 0.0313837C6.97642 0.00967768 7.0262 -0.00104016 7.0764 7.95206e-05C7.12661 0.0011992 7.17587 0.0141256 7.22027 0.0378344C7.26468 0.0615432 7.30301 0.0953826 7.33224 0.136671L7.3893 0.359748Z"
                            fill="black"
                          />
                        </svg>
                        <span>Категория 1</span>
                      </div>
                    </div>

                    <button className="size-9.5 flex items-center justify-center bg-black shrink-0 rounded-full">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1645 0.127769C14.4581 -0.0286097 13.7268 -0.0240491 13.0223 0.141128C12.3178 0.306305 11.6574 0.628062 11.0878 1.08362C10.19 1.76381 9.47243 2.66307 9.00035 3.69965C8.52827 2.66307 7.81071 1.76381 6.9129 1.08362C6.34911 0.617211 5.68888 0.288683 4.98243 0.123044C4.27599 -0.0425953 3.54197 -0.0409791 2.83623 0.127769C-0.0862032 0.832084 -0.208995 4.0015 0.134821 5.56105C0.773336 9.81209 8.43551 15.673 8.77933 15.9245C8.84393 15.9719 8.92095 15.9982 9.00035 16C9.07905 15.9984 9.15536 15.9721 9.21892 15.9245C9.53818 15.673 17.2004 9.81209 17.8413 5.58621C18.2343 4.0015 18.0869 0.832084 15.1645 0.127769Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <a href="#" className="relative block w-full max-w-43.25">
                    <div className="relative z-10 size-10 bg-black rounded-full flex items-center justify-center">
                      <img src="/img/chef.svg" alt="icon" />
                    </div>

                    <div className="text-sm absolute z-0 top-1/2 -translate-y-1/2 left-2 border border-[#000000] text-[#090909]/80 rounded-full py-2 pl-7 px-4">
                      Посмотреть
                    </div>
                  </a>
                </div>

                <img
                  src="/img/asterisk.svg"
                  alt="icon"
                  className="absolute z-0 bottom-0 right-0 translate-y-[40%] translate-x-[40%] size-75 object-fill"
                />
                {/* product.png */}
                <img
                  src="/img/product.png"
                  alt="icon"
                  className="absolute z-0 bottom-0 right-0 translate-y-[40%] translate-x-[40%] size-63 object-fill"
                />
              </div>
              {/* 2 */}
              <div className="relative bg-[#c4e861] overflow-hidden rounded-[40px] pt-5 pr-5 pb-5 pl-6">
                <div className="relative z-20">
                  <div className="flex justify-between gap-5 mb-20">
                    <div>
                      <h4 className="font-bold leading-[120%] text-[25px] mb-1.5">
                        Название Заведения
                      </h4>
                      <div className="text-[15px] text-[#090909]/80 flex items-center gap-1">
                        <svg
                          width={11}
                          height={18}
                          viewBox="0 0 11 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.3893 0.359748L6.68932 7.65013H10.6838C10.7431 7.6501 10.8012 7.66654 10.8518 7.69765C10.9025 7.72876 10.9437 7.77334 10.971 7.82654C10.9983 7.87973 11.0106 7.93948 11.0066 7.99926C11.0025 8.05904 10.9823 8.11656 10.9482 8.16552L4.18992 17.8847C4.1466 17.9393 4.08702 17.9783 4.02005 17.9958C3.95307 18.0134 3.88227 18.0087 3.81817 17.9823C3.75407 17.956 3.70009 17.9094 3.66426 17.8496C3.62843 17.7897 3.61266 17.7198 3.61929 17.6501L4.31927 10.3597H0.324802C0.264425 10.36 0.205179 10.3432 0.153772 10.3112C0.102364 10.2792 0.060849 10.2332 0.0339266 10.1786C0.00700426 10.124 -0.00424987 10.0628 0.00143845 10.002C0.00712678 9.94126 0.0295303 9.88331 0.0661125 9.83475L6.81486 0.125133C6.84586 0.0851872 6.88563 0.0530897 6.93103 0.0313837C6.97642 0.00967768 7.0262 -0.00104016 7.0764 7.95206e-05C7.12661 0.0011992 7.17587 0.0141256 7.22027 0.0378344C7.26468 0.0615432 7.30301 0.0953826 7.33224 0.136671L7.3893 0.359748Z"
                            fill="black"
                          />
                        </svg>
                        <span>Категория 1</span>
                      </div>
                    </div>

                    <button className="size-9.5 flex items-center justify-center bg-black shrink-0 rounded-full">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1645 0.127769C14.4581 -0.0286097 13.7268 -0.0240491 13.0223 0.141128C12.3178 0.306305 11.6574 0.628062 11.0878 1.08362C10.19 1.76381 9.47243 2.66307 9.00035 3.69965C8.52827 2.66307 7.81071 1.76381 6.9129 1.08362C6.34911 0.617211 5.68888 0.288683 4.98243 0.123044C4.27599 -0.0425953 3.54197 -0.0409791 2.83623 0.127769C-0.0862032 0.832084 -0.208995 4.0015 0.134821 5.56105C0.773336 9.81209 8.43551 15.673 8.77933 15.9245C8.84393 15.9719 8.92095 15.9982 9.00035 16C9.07905 15.9984 9.15536 15.9721 9.21892 15.9245C9.53818 15.673 17.2004 9.81209 17.8413 5.58621C18.2343 4.0015 18.0869 0.832084 15.1645 0.127769Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <a href="#" className="relative block w-full max-w-43.25">
                    <div className="relative z-10 size-10 bg-black rounded-full flex items-center justify-center">
                      <img src="/img/chef.svg" alt="icon" />
                    </div>

                    <div className="text-sm absolute z-0 top-1/2 -translate-y-1/2 left-2 border border-[#000000] text-[#090909]/80 rounded-full py-2 pl-7 px-4">
                      Посмотреть
                    </div>
                  </a>
                </div>

                <img
                  src="/img/asterisk.svg"
                  alt="icon"
                  className="absolute z-0 bottom-0 right-0 translate-y-[40%] translate-x-[40%] size-75 object-fill"
                />
                {/* product.png */}
                <img
                  src="/img/product.png"
                  alt="icon"
                  className="absolute z-0 bottom-0 right-0 translate-y-[40%] translate-x-[40%] size-63 object-fill"
                />
              </div>
              {/* 3 */}
              <div className="relative bg-[#6f9afa] overflow-hidden rounded-[40px] pt-5 pr-5 pb-5 pl-6">
                <div className="relative z-20">
                  <div className="flex justify-between gap-5 mb-20">
                    <div>
                      <h4 className="font-bold leading-[120%] text-[25px] mb-1.5">
                        Название Заведения
                      </h4>
                      <div className="text-[15px] text-[#090909]/80 flex items-center gap-1">
                        <svg
                          width={11}
                          height={18}
                          viewBox="0 0 11 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.3893 0.359748L6.68932 7.65013H10.6838C10.7431 7.6501 10.8012 7.66654 10.8518 7.69765C10.9025 7.72876 10.9437 7.77334 10.971 7.82654C10.9983 7.87973 11.0106 7.93948 11.0066 7.99926C11.0025 8.05904 10.9823 8.11656 10.9482 8.16552L4.18992 17.8847C4.1466 17.9393 4.08702 17.9783 4.02005 17.9958C3.95307 18.0134 3.88227 18.0087 3.81817 17.9823C3.75407 17.956 3.70009 17.9094 3.66426 17.8496C3.62843 17.7897 3.61266 17.7198 3.61929 17.6501L4.31927 10.3597H0.324802C0.264425 10.36 0.205179 10.3432 0.153772 10.3112C0.102364 10.2792 0.060849 10.2332 0.0339266 10.1786C0.00700426 10.124 -0.00424987 10.0628 0.00143845 10.002C0.00712678 9.94126 0.0295303 9.88331 0.0661125 9.83475L6.81486 0.125133C6.84586 0.0851872 6.88563 0.0530897 6.93103 0.0313837C6.97642 0.00967768 7.0262 -0.00104016 7.0764 7.95206e-05C7.12661 0.0011992 7.17587 0.0141256 7.22027 0.0378344C7.26468 0.0615432 7.30301 0.0953826 7.33224 0.136671L7.3893 0.359748Z"
                            fill="black"
                          />
                        </svg>
                        <span>Категория 1</span>
                      </div>
                    </div>

                    <button className="size-9.5 flex items-center justify-center bg-black shrink-0 rounded-full">
                      <svg
                        width={18}
                        height={16}
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.1645 0.127769C14.4581 -0.0286097 13.7268 -0.0240491 13.0223 0.141128C12.3178 0.306305 11.6574 0.628062 11.0878 1.08362C10.19 1.76381 9.47243 2.66307 9.00035 3.69965C8.52827 2.66307 7.81071 1.76381 6.9129 1.08362C6.34911 0.617211 5.68888 0.288683 4.98243 0.123044C4.27599 -0.0425953 3.54197 -0.0409791 2.83623 0.127769C-0.0862032 0.832084 -0.208995 4.0015 0.134821 5.56105C0.773336 9.81209 8.43551 15.673 8.77933 15.9245C8.84393 15.9719 8.92095 15.9982 9.00035 16C9.07905 15.9984 9.15536 15.9721 9.21892 15.9245C9.53818 15.673 17.2004 9.81209 17.8413 5.58621C18.2343 4.0015 18.0869 0.832084 15.1645 0.127769Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <a href="#" className="relative block w-full max-w-43.25">
                    <div className="relative z-10 size-10 bg-black rounded-full flex items-center justify-center">
                      <img src="/img/chef.svg" alt="icon" />
                    </div>

                    <div className="text-sm absolute z-0 top-1/2 -translate-y-1/2 left-2 border border-[#000000] text-[#090909]/80 rounded-full py-2 pl-7 px-4">
                      Посмотреть
                    </div>
                  </a>
                </div>

                <img
                  src="/img/asterisk.svg"
                  alt="icon"
                  className="absolute z-0 bottom-0 right-0 translate-y-[40%] translate-x-[40%] size-75 object-fill"
                />
                {/* product.png */}
                <img
                  src="/img/product.png"
                  alt="icon"
                  className="absolute z-0 bottom-0 right-0 translate-y-[40%] translate-x-[40%] size-63 object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
