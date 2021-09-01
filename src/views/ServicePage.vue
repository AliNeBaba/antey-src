<template>
    <main class="bg-light">

        <section class="container-xl container py-lg-5 py-sm-3 py-1 mb-5">
          <div class="row align-items-center">
            <h1 class="font-weight-bold text-center text-uppercase h2 p-3">{{ currentService.header }}</h1>

            <div class="col-xxl-3">
                <p class="container text-center text-uppercase p-3">
                  Ознакомьтесь с расценками на работу.<br />Ниже представлены ходовые позиции товаров.<br /> Добавляйте нужное количество работ и товаров в калькулятор.
                </p>
            </div>

            <div class="container-xl col p-5">
             <table class="table table-striped table-hover align-center">
               <caption>*Здесь указаны только основные виды работ.</caption>
               <thead>
                 <tr>
                   <th scope="col">Основные виды работ (на {{ currentService.onTheDate }})*</th>
                   <th scope="col">Цена &#8381;</th>
                   <th scope="col">Калькулятор</th>
                 </tr>
               </thead>
               <tbody>
                <jobs-table
                  :jobs="currentService.price"
                  @change-calc-data="dataToCalc($event, 'jobs')"
                  />
               </tbody>
               <tfoot>
                 <td>Результат расчета внизу страницы.</td>
                 <td>Предварительно:</td>
                 <td>{{ calcJobs }}</td>
               </tfoot>
             </table>
            </div>
          </div>
        </section>

        <section class="py-lg-5 py-sm-3 py-1">
          <div class="container">
            <div class="row g-3">
              <card-product
                v-for="(good, index) in currentService.goods"
                :key="index" class="card" style="width: 18rem;"
                :good="good"
                @change-calc-data="dataToCalc($event, 'products')"
                />
            </div>
          </div>
        </section>

        <div class="container p-4 bg-light">
          <div class="row">
            <div class="container col">
              <h2 class="h3 text-center">Результаты расчета</h2>
              <table class="table table-stripped table-hover">
                <tbody>
                  <tr>
                    <td>Работы:</td>
                    <td>{{ calcJobs }}</td>
                  </tr>
                  <tr>
                    <td>Материалы:</td>
                    <td>{{ calcProducts }}</td>
                  </tr>
                  <tr>
                    <td>Итого:</td>
                    <td>{{ calcTotal }}</td>
                  </tr>
                </tbody>
              </table>
              <p class="p-3 text-danger">
                Расчет не является офертой и представлен Вам для ознакомления. Могут быть не учтены дополнительные работы или материалы, связанные с индивидуальными особенностями заказа.
              </p>
              <p>
                Вы можете отправить расчет нашему специалисту. Он свяжется с Вами и проконсультирует по деталям.
              </p>
                <div>
                  <button type="button" class="btn btn-success">Отправить специалисту</button>
                </div>
            </div>
            <div class="container col">
              <h2 class="h3 text-center">Читайте по теме:</h2>
            </div>
          </div>
        </div>
    </main>
</template>

<script>
import CardProduct from '@/components/CardProduct.vue'
import JobsTable from '@/components/JobsTable.vue'
export default {
  name: 'ServicePage',
  props: ['current'],
  data () {
    return {
      currentService: {},
      selectedService: {
        jobs: [],
        products: []
      }
    }
  },
  components: {
    'card-product': CardProduct,
    'jobs-table': JobsTable
  },
  created: function () {
    this.putCurrentService(this.$route.params.current)
  },
  methods: {
    dataToCalc (data, target) {
      const i = this.selectedService[target].findIndex(el => el.name === data.name)
      if (i === -1) {
        this.selectedService[target].push(data)
      } else {
        this.selectedService[target][i].number += data.number
        if (!this.selectedService[target][i].number) {
          this.selectedService[target].splice(i, 1)
        }
      }
    },
    putCurrentService (based) {
      this.axios
        .get(`/jsons/${based}.json`)
        .then(response => {
          this.currentService = response.data
        })
        .catch(error => {
          console.log(error)
          this.$router.push({ name: 'NotFound' })
        })
    },
    calcSum (target) {
      let sum = 0
      for (let i = 0; i < this.selectedService[target].length; i++) {
        sum += this.selectedService.[target][i].price * this.selectedService[target][i].number
      }
      return sum
    }
  },
  computed: {
    calcJobs () {
      return this.calcSum('jobs')
    },
    calcProducts () {
      return this.calcSum('products')
    },
    calcTotal () {
      return this.calcSum('jobs') + this.calcSum('products')
    }
  },
  watch: {
    current (newCurrent, oldCurrent) {
      this.putCurrentService(this.current)
    }
  }
}
</script>
