import { mount } from '@vue/test-utils';
import Card from '@/components/CardView.vue'; // Replace './Shop' with the correct path to your component

describe('testea todo el componente', () => {
  it('test h3 y props', () => {
    // Sample data to pass to the component
    const dataInfo = {
      data: [
        { id_product: 1, description: 'Product 1', precio: '10$' },
        { id_product: 2, description: 'Product 2', precio: '20$' },
        // Add more sample data as needed
      ],
    };

    // Mount the component with the test data
    const wrapper = mount(Card, {
      props: {
        dataInfo,
      },
    });

    // Assertions
    expect(wrapper.find('h3').text()).toBe('Shop'); // Check if the h3 element has the correct text
    expect(wrapper.findAll('.card')).toHaveLength(dataInfo.data.length); // Check if all data items are rendered as cards
  });

  // Add more test cases as needed
});