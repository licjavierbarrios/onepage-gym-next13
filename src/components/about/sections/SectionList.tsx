import ButtonPrimary from "@/components/ui/ButtonPrimary";

type Props = {};
const SectionList = (props: Props) => {
  return (
    <article className="flex-1 flex flex-col items-center gap-8">
      <ul className="list-disc marker:text-primary space-y-4 text-xl">
        <li>Best Gym</li>
        <li>Experts Coach</li>
        <li>Flexible Workout Time</li>
        <li>Good Workout Facilities</li>
        <li>Consultation With Experts</li>
      </ul>
      <ButtonPrimary type="button" title="See More Benifits" />
    </article>
  );
};
export default SectionList;
