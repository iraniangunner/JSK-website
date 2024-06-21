import { CertificationsCarousel } from "./carousel/CertificationCarousel";

export default async function Certificate() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <CertificationsCarousel />;
}
