const loadBlogData = async (match, setBlog) => {
  const response = await fetch(`https://enigmatic-bastion-98317.herokuapp.com${match.url}`);
  const json_data = await response.json();
  setBlog(json_data);
};

export default loadBlogData;