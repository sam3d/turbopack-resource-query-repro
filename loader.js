module.exports = async function loader() {
  this.cacheable(false);
  return `export default "${this.resourceQuery || "no resource query"}";`;
};
