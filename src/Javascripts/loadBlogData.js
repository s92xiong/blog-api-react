const loadBlogData = async (setBlogData) => {
  const response = await fetch("https://enigmatic-bastion-98317.herokuapp.com/");
  const json_data = await response.json();

  const json_data_updated_time = json_data.map(obj => {
    const array_dates = new Date(obj.timestamp).toString().split(" ");
    const date_month_day = `${array_dates[1]} ${array_dates[2]}`;
    return {...obj, date_month_day};
  });

  setBlogData(json_data_updated_time);
};

export default loadBlogData;