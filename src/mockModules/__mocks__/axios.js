export const response = { data: [{ name: 'Mark' }, { name: 'Anthony' }] };

export default { get: () => Promise.resolve(response) };
