// import { shallowMount } from '@vue/test-utils';
import { config } from '@vue/test-utils';
// import Chartist from 'chartist';
// import ChartCard from '@/components/Cards/ChartCard.vue';

if (config.stubs !== undefined) {
  config.stubs['md-card'] = '<div />';
}

// describe('Organization.vue', () => {
//   // describe('GET /api/users', function() {
//   //     it('respond with an array of users', function() {
//   //         // ...
//   //     });
//   // });

//   it('renders props.msg when passed', () => {
//     const msg = 'red';
//     const wrapper = shallowMount(ChartCard, {
//       propsData: { backgroundColor: msg },
//       // computed: {
//       //   $Chartist: () => Chartist,
//       // },
//     });
//     expect(wrapper.props().backgroundColor).toBe(msg);
//   });
// });
