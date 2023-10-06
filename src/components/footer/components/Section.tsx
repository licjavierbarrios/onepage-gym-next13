type Props = {
  title: string
  list: string[]
}
const Section = ({title, list}: Props) => {
  return (
    <section>
          <h5 className="text-xl font-semibold text-white mb-5">{title}</h5>
          <ul>
            
            {
             list.map((link, index)=>(
              <li key={index} className="mb-2">{link}</li>
             )) 
            }
          </ul>
        </section>
  )
}
export default Section