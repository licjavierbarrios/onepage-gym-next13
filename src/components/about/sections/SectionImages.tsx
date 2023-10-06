import Image from "next/image";

type Props = {}
const SectionImages = (props: Props) => {
  return (
    <article className="flex-1 relative">
            <div className="lg:absolute -top-48 left-18">
              <div className="relative w-[85vw] mb-5 lg:w-32 h-60">
                <Image
                  src="/images/trainer-1.png"
                  alt="trainer"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="lg:absolute -top-20 right-10">
              <div className="relative w-[85vw] mb-5 lg:w-32 h-60">
                <Image
                  src="/images/trainer-2.png"
                  alt="trainer"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="lg:absolute top-20 left-24">
              <div className="relative w-[85vw] mb-5 lg:w-56 h-32">
                <Image
                  src="/images/trainer-3.png"
                  alt="trainer"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="lg:absolute -top-64 right-20">
              <div className="relative w-[85vw] mb-5 lg:w-56 h-32">
                <Image
                  src="/images/trainer-4.png"
                  alt="trainer"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </article>
  )
}
export default SectionImages