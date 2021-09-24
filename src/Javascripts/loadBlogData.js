const loadBlogData = async (match, setBlog) => {
  const response = await fetch(`https://enigmatic-bastion-98317.herokuapp.com${match.url}`);
  const json_data = await response.json();

  const array_dates = new Date(json_data.timestamp).toString().split(" ");
  const date_month_day = `${array_dates[1]} ${array_dates[2]}`;
  setBlog({...json_data, date_month_day});
};

export default loadBlogData;