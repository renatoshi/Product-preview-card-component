import imgMobile from "../images/image-product-mobile.jpg";
import imgDesktop from "../images/image-product-desktop.jpg";

function App() {
  return (
    <main className="flex flex-col bg-cream font-montserrat items-center justify-center max-w-[1440px] mx-auto text-sm min-h-screen">
      <div className="my-8">
        <div className="flex flex-col h-[610px] w-[340px] overflow-hidden rounded-lg bg-white drop-shadow-sm md:flex-row md:h-[450px] md:w-[600px]">
          <section className="h-[240px] md:h-full md:w-[300px]">
            <img
              src={imgMobile}
              alt="imgmobile"
              className="object-cover md:hidden"
            />
            <img
              src={imgDesktop}
              alt="imgDesktop"
              className="hidden object-cover md:block"
            />
          </section>
          <section className="flex h-[360px] flex-col  justify-center space-y-4 p-6 md:h-full md:w-[280px] ">
            <span className="uppercase tracking-[0.25em] text-darkgrayishblue">
              Permufe
            </span>
            <h2 className="text-verydarkblue font-bold  font-Fraunces text-3xl md:text-4xl">
              Gabrielle Essence Eau De Parfum
            </h2>
            <p className="text-darkgrayishblue md:pb-3">
              A floral, solar and voluptuos interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center gap-4 md:pb-3">
              <span className="text-darkcyan text-3xl font-bold font-Fraunces ">
                $149.99
              </span>
              <span className="text-darkgrayishblue line-through text-base ">
                $169.99
              </span>
            </div>
            <button className="bg-darkcyan flex items-center justify-center gap-4 rounded-lg p-3 text-base font-bold text-white transition-all duration-200 ease-in-out hover:bg-[#1A4031]">
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF"/></svg>
              <span>Add to Cart</span>
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;

{
  /* <main className="my-8"> 
      <div className="flex flex-col h-[600px] w-[340px]  mx-4">
        <section className="h-[240px]">
          <img src={imgMobile} alt="imgmobile" className="rounded-t-xl" />
        </section>

        <div className="bg-white flex flex-col rounded-b-xl p-6 space-y-4 h-[360px] justify-center">
          <p className="text-[12px] tracking-[6px] mt-3 text-darkgrayishblue">
            PERFUME
          </p>
          <h1 className="text-3xl text-verydarkblue font-bold  font-Fraunces">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-[14px] mt-3 text-darkgrayishblue">
            A floral, solar and voluptuos interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-darkcyan text-[33px] mt-4  font-bold font-Fraunces">
              $149.99
            </p>
            <p className="pt-7 line-through text-darkgrayishblue text-[14px]">
              $169.99
            </p>
          </div>
          <div className="mt-5">
            <button className="bg-darkcyan flex items-center justify-center text-white transition-all font-bold w-full gap-4 rounded-lg p-3 text-base duration-200 ease-in-out hover:bg-[#1A4031] ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main> */
}
