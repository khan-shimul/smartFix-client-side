import PageHeader from "../Shared/PageHeader/PageHeader";
import axios from "axios";
import Spinner from "../Shared/Spinner/Spinner";
import ServiceCard from "./ServiceCard";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const Services = () => {
  // const [services, setServices] = useState([]);
  // useEffect(
  //   () => async () => {
  //     const data = await axios.get("http://localhost:5000/services");
  //     setServices(data.data);
  //   },
  //   []
  // );
  const {
    isPending,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const result = await axios.get("http://localhost:5000/services");
      return result.data;
    },
  });
  // Showing a spinner until data received
  if (isPending) return <Spinner />;
  if (error) {
    toast.error("Something went wrong:", error.message);
    return <Spinner />;
  }

  return (
    <section className="min-h-screen bg-gray-50">
      <PageHeader>Services</PageHeader>
      <div className="max-w-7xl mx-auto py-14 px-5 md:px-7">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
