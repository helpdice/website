import type { Category } from "@/types/category";

function CategoryData() {
  const categoryData:Category[] = [
    {
      _id: 1,
      name: "Technology",
      slug: "ryrrytrur",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    },
    {
      _id: 2,
      name: "Technology",
      slug: "egjefwgjhw",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    },
    {
      _id: 2,
      name: "Education",
      slug: "khfeuirge",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    },
    {
      _id: 1,
      name: "Accounts",
      slug: "sjhgierigh",
      metadata:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    }
  ];
  return categoryData;
}

export default CategoryData;
