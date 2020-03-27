const arr = [
  "y_100d",
  "y_pil",
  "y_mortgage",
  "y_alfacard",
  "y_business",
  "y_contribution",
  "y_investments",
  "y_premium"
];

const arr2 = [
  {
    name: "widget1",
    product: "y_business"
  },
  {
    name: "widget2"
    //,product: "y_premium"
  },
  {
    name: "widget3"
    //,product: "y_mortgage"
  },
  {
    name: "widget4",
    product: "y_pil"
  }
];

const sortBanners1 = (banners, sortArr) => {
  const copied = [...banners];

  const findIndex = item => {
    const idx = sortArr.findIndex(product => product === item.product);

    return idx === -1 ? Infinity : idx;
  };

  return copied.sort((a, b) => {
    return findIndex(a) - findIndex(b);
  });
};

const sortBanners2 = (banners, sortArr) => {
  if (!sortArr) return banners;

  const copied = [...banners];

  const result = sortArr.reduce((acc, product) => {
    const findedIndex = copied.findIndex(el => el.product === product);
    if (findedIndex !== -1) {
      acc.push(copied.splice(findedIndex, 1)[0]);
    }
    return acc;
  }, []);

  return [...result, ...copied];
};

const sorted1 = sortBanners1(arr2, arr);

const sorted2 = sortBanners2(arr2, arr);

console.log(
  "array1",
  sorted1.map(x => `${x.name}-${x.product}`)
);

console.log(
  "array2",
  sorted2.map(x => `${x.name}-${x.product}`)
);
