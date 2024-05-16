import Cards from '../components/Cards'
import data from '../data.json'

function Activity() {
    // Assurez-vous que data.activité est un tableau avant de mapper
    const activities = data.activité || []; // Par défaut, un tableau vide si data.activité est undefined
  
    return (
      <section className='resultContainer'>
        {activities.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </section>
    );
  }
  
  export default Activity;