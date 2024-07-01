import { Typography, Card } from "@material-tailwind/react";

function StatsCard({ count, title, description }) {
  return (
    <Card color="white" shadow={false}>
      <Typography
        variant="gradient"
        className="text-3xl font-bold"
        color="blue"
      >
        {count}
      </Typography>
      <hr className="mt-2 mb-4 max-w-sm" />
      <Typography variant="h5" color="blue-gray" className="mt-1 font-bold">
        {title}
      </Typography>
      <Typography className="text-base max-w-xs font-normal leading-7 text-gray-500">
        {description}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "87%",
    title: "Accuracy in Financial Predictions",
    description: "AI-driven insights ensure precise financial decisions.",
  },
  {
    count: "ksh.200,000+",
    title: "Investment Returns",
    description: "Maximized returns through intelligent investment strategies.",
  },
  {
    count: "95%",
    title: "Customer Satisfaction",
    description: "Effortlessly managed finances lead to satisfied clients.",
  },
  {
    count: "99%",
    title: "Data Security Compliance",
    description:
      "High standards ensure data integrity and regulatory compliance.",
  },
];

export function StatsComp() {
  return (
    <Card className="md:p-8 p-6 container mx-auto border-[1px] shadow-transparent md:w-11/12 my-5">
      <div className="lg:mb-24 mb-10">
        <Typography
          color="blue-gray"
          className="mb-4 text-2xl font-bold lg:text-4xl"
        >
          AI-Powered Financial Insights
        </Typography>
        <Typography variant="lead" className="w-full text-gray-500 max-w-xl">
          Harness AI to make smarter financial decisions with unparalleled
          precision.
        </Typography>
      </div>
      <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center">
        <Card className="bg-gray-200/50 py-24 text-center" shadow={false}>
          <Typography
            variant="h1"
            className="text-blue-500 leading-snug text-5xl"
          >
            300K
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mt-2 font-bold">
            Assets Managed
          </Typography>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mt-10 font-bold"
          >
            Financial Excellence
          </Typography>
          <Typography
            variant="lead"
            className="mt-1 text-base mx-auto text-gray-500 lg:w-8/12"
          >
            Achieving superior financial management with AI-driven insights.
          </Typography>
        </Card>

        <div>
          <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
            {stats.map((props, key) => (
              <StatsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default StatsComp;
