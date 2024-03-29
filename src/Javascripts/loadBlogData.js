const loadBlogData = async (match, setBlog) => {
  const response = await fetch(`https://blog-api-xf74.onrender.com${match.url}`);
  const json_data = await response.json();

  // Configure date
  const array_dates = new Date(json_data.timestamp).toString().split(" ");
  const date_month_day = `${array_dates[1]} ${array_dates[2]}`;

  // Configure comments
  const new_comments = json_data.comments.map(comment => {
    let new_time = comment.timestamp.slice(0, 10);
    return {
      ...comment,
      new_time,
    };
  });

  // Convert string into array of strings
  let text_arr = json_data.text.split("\n");

  // console.log({ ...json_data, date_month_day, new_comments });
  setBlog({ ...json_data, date_month_day, new_comments, text_arr });
};

export default loadBlogData;