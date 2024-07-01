import React from "react";
import { Avatar, Card, CardBody, Typography, CardHeader, Carousel, IconButton } from "@material-tailwind/react";
import { testimonialsData } from './TestimonialData';

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function TestimonialSection() {
  return (
    <Carousel
      className="bg-blue-200/50 py-24"
      autoplay
      loop   
    >
      {testimonialsData.map((testimonial, index) => (
        <Card key={index} color="transparent" shadow={false} className="w-full md:max-w-[26rem] mx-auto md:px-0 px-6">
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src={testimonial.avatar}
              alt={testimonial.name}
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  {testimonial.name}
                </Typography>
                <div className="flex items-center gap-0">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
              <Typography color="blue-gray">{testimonial.position}</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;{testimonial.text}&quot;
            </Typography>
          </CardBody>
        </Card>
      ))}
    </Carousel>
  );
}
