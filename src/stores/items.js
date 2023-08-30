import { defineStore } from 'pinia';

export const useItemsStore = defineStore({
  id: 'items',
  getters: {
    getItemsById: (state) => (id) => {
      return state.items.find((item) => item.id === id);
    },
  },
  state: () => ({
    items:[
      {
        id: 1,
        name: 'Uzbekistan and the world',
        description: 'The article is devoted to the analysis of the role of Uzbekistan in the world community. The author analyzes the foreign policy of the country, its place in the international arena, the role of the country in the region and the world. The article also discusses the main directions of the foreign policy of Uzbekistan, the main directions of cooperation with foreign countries, the main directions of cooperation with international organizations.',
      },


    ],
    "literatures": `
                    <p>1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bonkimchondo Chottoddhai. Studies in Hindu Philosophy // Voprosy philosophii. 2016. № 11. Pp. 167 - 175.</p>

                    <p>2.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vorobyeva N. S. Japanese Tea Acting as Performance // Human. 2016. № 4. Pp. 155 - 165.</p>

                    <p>3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Spiritual Culture of China: Encyclopedia: In 5 vols. / 3. Spiritual Culture of China: Encyclopedia: 5 vol. - M.: Eastern literature, 2006.</p>

                    <p>4.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Julien Fr. The Way to the Goal: Detour or Straight Out? The Strategy of Meaning in China and Greece. - Moscow: The Moscow Philosophical Fund, 2001. &ndash; P. 360.</p>

                    <p>5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Indian Philosophy: Encyclopedia / Ed. by M.T. Stepanyan. - M.: Philosophy Institute of RAS; Acad. Project; Gaudeamus, 2009. &ndash; P. 950.</p>

                    <p>6.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I Ching (The Book of Changes) / translated from Chinese. - SPb.: The ABC-classics, 2010. &ndash; P. 303.</p>

                    <p>7.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chinese Philosophy: Encyclopedic Dictionary. - M.: Thought, 1994. &ndash; P. 573.</p>

                    <p>8.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Kobzev, A.I. Chinese Logic and Dialectics // Spiritual Culture of China: Encyclopedia: In 5 vol. Т. 1: Philosophy / M. L. Titarenko, A. I. Kobzev, A. E. Lukianov. - Moscow: Oriental Literature, 2006. Pp. 82 - 126.</p>

                    <p>9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Confucius. I believe in antiquity /collected, translated and commented. I.I. Semenenko. - Moscow: Respublika, 1995. &ndash; P. 384.</p>

                    <p>10.&nbsp;&nbsp;&nbsp; Confucius. Judgments and conversations / translated by A.E. Lukyanov. - М.: 2018. &ndash; P. 207.</p>

                    <p>11.&nbsp;&nbsp;&nbsp; Krushinsky A.A. Logic of Ancient China. - M.: IDV RAN, 2013. &ndash; P. 384.</p>

                    <p>12.&nbsp;&nbsp;&nbsp; Krushinsky A.A. Studies of Ancient Chinese Logic //.</p>

                    <p>13.&nbsp;&nbsp;&nbsp; Issues of Philosophy. 2015. № 4. Pp. 170 - 185.</p>

                    <p>14.&nbsp;&nbsp;&nbsp; Markov S. M. Zen-Philosophy of the Stone Garden in the Culture of Japan and the Far East / Far East at the Crossroads of Cultures: Proceedings of the International Conference; 19 - 20 May 2016. - Khabarovsk: FEFUPS Publishing House, 2016. Т. 2. Pp. 27 - 31.</p>

                    <p>15.&nbsp;&nbsp;&nbsp; Markov S. M. The Book of Changes in the Spiritual Tradition of Far Eastern Culture // Uchenye zapiski KNAGTU (Komsomolsk-on-Amur). 2018. NO. III-2 (35). Pp. 35 - 40.</p>

                    <p>16.&nbsp;&nbsp;&nbsp; Markov S.M., Markova T.A. The Canon of Yin/Yang in Philosophy, Traditional Chinese Medicine and Far Eastern Culture: Philosophical and Methodological Aspects / Russia - China: History and Culture: Collected Articles and Reports of the XI International Scientific-Practical Conference. - Kazan: Publishing house of the Academy of Sciences of the Republic of Tatarstan, 2018. Pp. 231 - 239.</p>

                    <p>17.&nbsp;&nbsp;&nbsp; Pyatigorsky A.M. Lectures on Buddhist philosophy. - St. Petersburg: The ABC Classics, 2004. &ndash; Pp 432 с.</p>

                    <p>18.&nbsp;&nbsp;&nbsp; Radhakrishnan S. Indian philosophy: in 2 vols / translated from English - M.: Myth, 1993. &ndash; P. 624.</p>
    `
  })
});

