const loadBlogData = async (setBlogData) => {
  const response = await fetch("https://enigmatic-bastion-98317.herokuapp.com/");
  const json_data = await response.json();
  setBlogData(json_data);
};

export default loadBlogData;