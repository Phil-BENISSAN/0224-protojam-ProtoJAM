import Cards from '../components/Cards'
import SearchBar from '../components/SearchBar';
import data from '../data.json'

function Activity() {
    const activities = data.activité || [];
  
    return ( <>
      <section className='resultContainer'>
        {activities.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </section>
      </>
    );
  }
  
  export default Activity;