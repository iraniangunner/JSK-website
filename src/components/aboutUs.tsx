import { AboutUsDetailsUI } from "./aboutUsUI";

// export async function getDetail() {
//   const detail = await fetch("https://jsonplaceholder.typicode.com/posts/5", {
//     cache: "no-store",
//   })
//     .then((res) => res.json())
//     .catch((error) => console.log(error));

//   return detail;
// }

export function AboutUsDetails() {
  // try {
  //   const detail = await getDetail();
  return <AboutUsDetailsUI />;
  // return <AboutUsDetailsUI detail={detail.body} />;
  // } catch (error) {
  //   return (
  //     <div>
  //       <h2>Something went wrong!</h2>
  //       {/* {error.message} */}
  //       {/* <button onClick={() => reset()}>Try again</button> */}
  //     </div>
  //   );
  // }
}
