<template>
 <section>
   <div class="services-grid">
    <div class="service service1">
      <i class="ti-bar-chart"></i>
      <h4>Authors</h4>
      <p>Melikova M.N., Mukhammadieva Sh.F.</p>

    </div>

    <div class="service service2">
      <i class="ti-light-bulb"></i>
      <h4>Textbook</h4>
      <p>The textbook on the course "The history of Philosophy" is designed to acquaint students with the current problems of formation and development of philosophical knowledge, combining classical and modern concepts. A systematic presentation of the fundamental problems of philosophy as a special cultural formation, a form of theoretical comprehension of human existence in the world is given. The interrelation of philosophy with other spheres of human activities is shown; the methodological and world outlook functions of philosophy in the modern society are disclosed. The anthropological essence of philosophical knowledge is consistently revealed. The tasks of formation of individuality and personality of a future specialist and the significance of ethical problems are brought up to date. The tendencies of development of technogenic civilization and philosophic problems of science and technology are discussed. The textbook is designed for undergraduate students of all fields and forms of study.</p>

    </div>
  </div>
</section>
</template>
<script>
export default {
  name: 'AboutPage'
}
</script>
<style scoped>
body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  background: #fff;
  color: #999;
}

a {
  text-decoration: none;
  margin: 1rem 0;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8125rem;
  letter-spacing: 1px;
}

p {
  font-size: 0.9rem;
  margin: 1rem 0;
  line-height: 1.5;
}

section {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}

h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #333;
  font-size: 1.825rem;
  margin: 1.3rem 0;
}

.section-lead {
  max-width: 600px;
  margin: 1rem auto 1.5rem;
}

.service a {
  color: #5b7abb;
  display: block;
}

.service h4 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #56ceba;
  font-size: 1.3rem;
  margin: 1rem 0 0.6rem;
}

.services-grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.service {
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #e7e7e7;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.service:hover {
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
}

.service i {
  font-size: 3.45rem;
  margin: 1rem 0;
}

.service1 i,
.service1 h4,
.service1 .cta {
  color: #EF8745;
}

.service1:hover {
  border: 2px solid #42b7ca;
}

.service2 i,
.service2 h4,
.service2 .cta {
  color: #EF8745;
}

.service2:hover {
  border: 2px solid #425fca;
}

.service3 i,
.service3 h4,
.service3 .cta {
  color: #9c42ca;
}

.service3:hover {
  border: 2px solid #9c42ca;
}

.service .cta span {
  font-size: 0.6rem;
}

.service > * {
  flex: 1 1 100%;
}

.service .cta {
  align-self: flex-end;
}

@media all and (max-width: 900px) {
  .services-grid {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}

</style>
