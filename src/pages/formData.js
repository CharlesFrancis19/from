// pages/formData.js
import { executeQuery } from '../lib/db';

const FormData = ({ formData }) => {
  return (
    <div>
      <h1>Form Data</h1>
      <ul>
        {formData.map((data) => (
          <li key={data.id}>
            Name: {data.name}, Email: {data.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const result = await executeQuery('SELECT * FROM formDetails');
    const formData = result || [];
    return {
      props: { formData },
    };
  } catch (error) {
    console.error('Error fetching form data:', error);
    return {
      props: { formData: [] },
    };
  }
}

export default FormData;
