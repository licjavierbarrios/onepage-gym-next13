"use client";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Container from "@/components/shared/Container";
import trainers from "@/data/trainersDB";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Trainers = () => {
  return (
    <section
      id="trainers"
      className="min-h-screen flex items-center justify-center"
    >
      <Container>
        <Title title="Join Out" titlePrimary="Trainer" />
        <div>
          <Swiper
            spaceBetween={50}
            // slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              // Cuando el ancho de la pantalla sea menor o igual a 640px
              640: {
                slidesPerView: 1,
              },
              // Cuando el ancho de la pantalla sea menor o igual a 768px
              768: {
                slidesPerView: 2,
              },
              // Cuando el ancho de la pantalla sea menor o igual a 1024px
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {trainers.map(({ id, imageDir, name }) => (
              <SwiperSlide key={id}>
                <div className="relative w-full h-[450px] mx-auto">
                  <Image
                    src={imageDir}
                    alt={name}
                    fill
                    className="object-cover rounded-xl shadow-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
export default Trainers;
