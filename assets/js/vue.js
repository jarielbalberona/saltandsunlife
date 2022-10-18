import { createApp } from "https://unpkg.com/petite-vue?module";

function Product(item) {
  return {
    $template: "#item-template",
    class: "tt-grid-item",
    item
  };
}

createApp({
  Product,
  selected_category_products: [],
  all_products: [],
  category: "fins",

  filterProducts(type) {
    this.category = type;
    this.selected_category_products = []
    setTimeout(() => {
      const filtered = []

      this.all_products.forEach(item => {
        if(item.type === type) {
          filtered.push({
            ...item,
            price: new Intl.NumberFormat('fil-PH', { style: 'currency', currency: 'PHP' }).format(item.price)
          })
        }
      });

      this.selected_category_products = filtered
    }, 100)
  },


  onMounted() {
    Papa.parse(
      "https://salt-and-sun-assets-bucket.s3.ap-southeast-1.amazonaws.com/products.csv",
      {
        header: true,
        download: true,
        complete: async (results)  => {
          const data = results.data;
          this.all_products = data;
          this.filterProducts(this.category)
        },
      }
    );
  },

}).mount("#shop");
