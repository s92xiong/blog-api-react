const loadBlogData = async (match, setBlog) => {
  const response = await fetch(`https://enigmatic-bastion-98317.herokuapp.com${match.url}`);
  const json_data = await response.json();

  const array_dates = new Date(json_data.timestamp).toString().split(" ");
  const date_month_day = `${array_dates[1]} ${array_dates[2]}`;

  const new_comments = json_data.comments.map(comment => {
    let new_time = comment.timestamp.slice(0, 10);
    return {
      ...comment,
      new_time,
    };
  });

  // console.log({ ...json_data, date_month_day, new_comments });
  setBlog({ ...json_data, date_month_day, new_comments });
};

export default loadBlogData;