import { ways} from "../data";
import WayToTeach from "./WayToTeach";




export default function TeachingSection() {
    return (
        <section>
        <h3>Наш подход к обучению</h3>

        <ul>
          {/* <WayToTeach
            title={ways[0].title}
            description={ways[0].description}
          />
          <WayToTeach {...ways[1]} />
          <WayToTeach {...ways[2]} />
          <WayToTeach {...ways[3]} /> */}
          {ways.map((way) => {
            return <WayToTeach key= {way.title} {...way} />;
          })}
        </ul>
      </section>
    )
}