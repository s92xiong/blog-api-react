const load_all_blog_data = async (setBlogData) => {
  const response = await fetch("https://enigmatic-bastion-98317.herokuapp.com/");
  const json_data = await response.json();

  const blog_data = json_data.map(obj => {
    // Shorten text, cut after 2 setences.
    let string_arr = obj.text.split(". ");
    string_arr.splice(2);
    let new_string = string_arr.join(". ");

    obj.text = `${new_string}...`;

    // Update 
    const array_dates = new Date(obj.timestamp).toString().split(". ");
    const date_month_day = `${array_dates[1]} ${array_dates[2]}`; 

    return {...obj, date_month_day};
  });

  setBlogData(blog_data);
};

export default load_all_blog_data;