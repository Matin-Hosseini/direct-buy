import SectionHeader from "../SectionHeader/SectionHeader";
import Product from "../Product/Product";

export default function FlashSales() {
  return (
    <div className="hidden">
      <div className="container">
        <SectionHeader
          title={"This Month"}
          subtitle={"Best Selling Products"}
          hasSwiper
          countDown={5}
        />
      </div>
      <div className="right-container grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        <Product liked />
        <Product />
        <Product isNew />
        <Product />
      </div>
    </div>
  );
}
