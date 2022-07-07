const HomeFinder = {};
const URL = process.env.NEXT_PUBLIC_URL_SERVER + "dashboard/";

HomeFinder.home = async (user) => {
  const response = await fetch(URL, {
    method: "GET",
    headers: { token: localStorage.token },
  });
  return await response.json();
};

export default HomeFinder;
