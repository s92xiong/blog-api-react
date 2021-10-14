const load_all_blog_data = async (setBlogData) => {
  const response = await fetch("https://enigmatic-bastion-98317.herokuapp.com/");
  const json_data = await response.json();

  const json_data_updated_time = json_data.map(obj => {
    
    // Shorten text to two paragraphs only, append 3 periods to end of string
    let string_arr = obj.text.split(". ");
    string_arr.splice(2);
    obj.text = `${string_arr.join(". ")}...`;

    // Adjust date, return date as "Sep 10"
    const array_dates = new Date(obj.timestamp).toString().split(" ");
    const date_month_day = `${array_dates[1]} ${array_dates[2]}`;
    return {...obj, date_month_day};
  });

  setBlogData(json_data_updated_time);
};

export default load_all_blog_data;