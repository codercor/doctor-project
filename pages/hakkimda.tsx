import Container from "@components/Container";
import FloatingImages from "@components/FloatingImages";
import Footer from "@components/Footer";
import LandingLayout from "@components/Layouts/LandingLayout";
import Navbar from "@components/Navbar";
import BeforeFooter from "@components/Section/BeforeFooter";
import FirstBanner from "@components/Section/FirstBanner";
import InfoBanner from "@components/Section/InfoBanner";
import AcademicsListModal from "@components/SozlesmeModal/AcademicsListModal";
import SozlesmeModal from "@components/SozlesmeModal/SozlesmeModal";
import Text from "@components/Text";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Hakkimda: NextPage = () => {
    const [showAcademicList, setShowAcademicList] = useState(false)
    return <LandingLayout>
        <Container className=" h-[300px] md:h-[300px]  w-full bg-cover bg-no-repeat md:!max-w-full bg-center rounded-br-[120px] overflow-clip   md:bg-cover bg-[url(/images/png/karisik.png)]">
            <Container className="md:!max-w-[1455px] grid  place-items-end min-w-full backdrop-brightness-50  justify-center pb-20 md:pb-22 h-full">
                <Text className="text-[#F2F2F2] text-[24px] md:text-[34px] font-nexa-bold">Prof.Dr. Nazan Uysal Harzadin</Text>
            </Container>
        </Container>
        <Container className="flex  flex-col  mt-[20px] md:mt-[46px]">
         
            <div className="flex md:flex-row flex-col md:mb-0 mb-[20px]">
                <div className="md:min-h-[533px] md:min-w-[846px] min-h-[400px] overflow-clip rounded-r-[30px] border-2 px-[20px] relative">
                    <Image src="/images/png/hakkimda-nazan.png" layout="fill" objectFit="cover" />
                </div>
                <div className="flex flex-col md:max-w-[584px] gap-4 md:ml-[50px] md:mt-0 mt-[20px] md:mx-0 mx-[20px]  justify-center">
                    <Text type="body" className="!font-nexa-regular">1994 yılında Dokuz Eylül Üniversitesi Tıp Fakültesinden mezun oldum. Kütahya Simav’ da mecburi hizmetimi tamamladıktan sonra,
                        Tıpta Uzmanlık Sınavı ile aynı üniversitede Fizyoloji alanında uzmanlık eğitimine başladım. Aralık 1998’ de Fizyoloji Uzmanı, 2006’ da Fizyoloji doçenti, 2011 yılında 39 yaşımda Fizyoloji
                        profesörü oldum. Fizyoloji insan vücudunun normal işleyişini, normalden sapmaların hastalıklara gidişi nasıl etkilediğini, fizyopatolojik alanda hastalıkların kök nedenlerini inceleyen bir
                        bilim dalıdır. Üniversitede çalıştığım süre boyunca sinirbilim, metabolizma, mikrobesinler, egzersiz, stres konularında ve Diyabet, Alzheimer gibi hastalıkların nedenleri ve tedavilerini
                        içeren bilimsel araştırmalar yaptım. Uluslararası indeksli dergilerde toplam 89 adet bilimsel makalem bulunmaktadır.
                        Vücudumuz harika çalışan bir makine. Bu mükemmel makinanın iyi çalışması için, optimal sağlık için yapabileceklerimiz, sağlıklı yaşam ve sağlıklı beslenme konularına meslek hayatımın başından itibaren özel ilgim vardı. 2018 yılında sağlığımızı korumada ve kronik hastalıkların tedavisinde yeni bir yaklaşım sunan Cleveland Clinic Institute of Functional Medicine (IFM) in fonksiyonel tıp sertifika programına başladım.
                        2021 yılındaki sınavı alarak IFM Fonksiyonel Tıp Uygulayıcısı sertifikasını aldım. Sağlığı korumada fonksiyonel beslenmeye özel bir ilgi duyuyorum. Pandemi döneminde İstanbul Mutfak Sanatları Akademisi ile Fonksiyonel Beslenme programı açarak, fonksiyonel beslenmeyi bilen aşçılar yetiştirdik. Sonrasında Dokuz Eylül Üniversitesi Sürekli Eğitim Merkezinde Fonksiyonel Beslenme kursları verdim.
                        2023 Ocak ayında Dokuz Eylül üniversitesindeki görevimden emekli olarak ayrıldım. Halen kendi kliniğimde hizmet vermekteyim.
                        2016 yılından bu yana “Sağlıklı Yaşıyoruz” sosyal sorumluluk projesinin danışma kurulunda yer almaktayım. 2021 yılından bu yana keten tohumunun ülkemizde üretilmesini ve kullanılmasını teşvik amacı ile kurulan AR-GE kooperatifi olan “Döngü Kooperatifi” nin danışma kurulunda yer almaktayım.
                        Amatör olarak piyano çalmayı seviyorum.
                        Rüzgâr sörfü, bisiklet ve kayak sporları ile ilgileniyorum.
                    </Text>
                    <div className="relative md:w-[400px] h-[120px] mt-[30px] rotate-[-12deg]">
                        <Image src="/images/svg/brandmark3.svg" objectFit="contain" layout="fill" />
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col mb-[20px] md:mx-0 mx-[20px] justify-center items-center md:mt-[60px] md:mb-[77px]">
                <div className="flex flex-col md:max-w-[584px] gap-4 md:ml-[50px]  justify-center">
                    <Text type="body" className="!font-nexa-regular">
                        <h1 className="font-nexa-bold">EĞİTİM:</h1>
                        <ul className="list-disc">
                            <li>1994: Lisans: Dokuz Eylül Üniversitesi, Tıp Fakültesi</li>
                            <li className="text-[14px]">1998: Tıpta Uzmanlık: Dokuz Eylül Üniversitesi Tıp Fakültesi Fizyoloji Anabilim Dalı</li>
                            <li>2006: Fizyoloji Doçenti</li>
                            <li>2011: Fizyoloji Profesörü</li>
                            <li>2022: IFM Fonksiyonel Tıp Uygulayıcısı</li>
                        </ul>

                        <h1 className="mt-[20px] font-nexa-bold"> MESLEKİ DENEYİM:</h1>
                        <div className="flex flex-col md:flex-row gap-[10px]">
                            <ul className="flex-[1] list-disc">
                                <li>1996-2023: Tıp Fakültesi, Hemşirelik Fakültesi, Fizik Tedavi Fakültesi, Eğitim Fakültesi, Sağlık Bilimleri Enstitüsü, Sağlık Hizmetleri Meslek Yüksek Okulu, Spor Bilimleri Yüksek Okulunda lisans, yüksek lisans ve doktora düzeyinde dersler verdim.</li>
                                <li>2006-2023: Yüksek lisans, Doktora, Yardımcı Doçent, Doçent ve Profesörlük jürilerinde görev aldım.</li>
                                <li>1998-2023: Ulusal ve Uluslararası birçok bilimsel derginin gönüllü hakemler listesinde bulunmaktayım.</li>
                                <li>2006-2023: TÜBİTAK’ ta ve Türkiye’ deki birçok üniversitenin bilimsel araştırma projeleri biriminde proje değerlendirme hakemi olarak çalıştım.</li>
                                <li>2009- Halen: BMC (British Medical Journal) Neuroscience dergisinin editörleri arasındayım.</li>
                                <li>2013: Dokuz Eylül üniversitesi, Tıp Fakültesi Fizyoloji Anabilim Dalı, Davranış Fizyoloji Bilim Dalının Kurulmasında çalıştı.</li>
                            </ul>
                            <ul className="flex-[1]  list-disc">
                                <li>2016: Dokuz Eylül üniversitesi, Tıp Fakültesi Fizyoloji Anabilim Dalı, Deney Hayvanları Merkezinin ve Etik Kurulunun Kurulmasında çalıştı.</li>
                                <li>2016-2020: Dokuz Eylül üniversitesi, Tıp Fakültesi Fizyoloji Anabilim Dalı, Deney Hayvanları Etik Kurulu (DEU-TF-HADYEK) Başkanı olarak çalıştım.</li>
                                <li>2020-2022: Dokuz Eylül Üniversitesi, Deney Hayvanları Etik Kurulu (DEU-HADYEK) Başkan Yardımcısı olarak çalıştım.</li>
                                <li>2020-2021: İstanbul Mutfak Sanatları Akademisi Fonksiyonel Beslenme Programı Eğitimi verdim.</li>
                                <li>2021-2022: Dokuz Eylül Üniversitesi Sürekli Eğitim Merkezi Fonksiyonel Beslenme Becerileri Eğitimleri verdim.</li>
                                <li>2021-2022: Dokuz Eylül Üniversitesi Geleneksel ve Tamamlayıcı Tıp Uygulamaları Merkezi Merkez Yönetim Kurulu Üyesi olarak çalıştım.</li>
                                <li>2022-2023: Dokuz Eylül Üniversitesi Sürekli Eğitim Merkezi Merkez Danışma Kurulu Üyesi olarak çalıştım.</li>
                            </ul>
                        </div>
                    </Text>
                    <button className="mt-[50px] hover:border-2 transition-all hover:bg-primary hover:text-secondary hover:rounded-[20px] py-2" onClick={() => { setShowAcademicList(true) }}> Akademik Makalelerimi Görmek İçin Tıklayın </button>
                    {showAcademicList && <AcademicsListModal closeWithValue={(v) => {
                        setShowAcademicList(false)
                    }} >

                        <h3 className="font-nexa-bold"> BİLİMSEL MAKALELERİM:</h3>
                        <ul className="list-disc">
                            <li>   Daily Consumption of High-Polyphenol Olive Oil Enhances Hippocampal Neurogenesis in Old Female Rats.</li>
                            <li>   Magnesium yields opposite effects on the nuclear and cytosolic cascades of apoptosis in different rat brain regions</li>
                            <li>   Repeated acetaminophen administration damaged hippocampal tissue but did not affect prefrontal cortex or anxiety behaviors</li>
                            <li>   Comparison anti-oxidant and neuroprotective effects of extra-virgin olive oil, donepezil and rosmarinic acid on aluminum chloride-induced Alzheimer’s in rat models</li>
                            <li>   A combination of ketogenic diet and voluntary exercise ameliorates anxiety and depression-like behaviors in Balb/c mice.</li>
                            <li>   The effects of chronic restraint stress on empathy-like behaviour in rats</li>
                            <li>   Magnesium Citrate Increases Pain Threshold and Reduces TLR4 Concentration in the Brain</li>
                            <li>   Regular aerobic exercise increased VEGF levels in both soleus and gastrocnemius muscles correlated with hippocampal learning and VEGF levels</li>
                            <li>   Nicotine lowers TNF-α, IL-1b secretion and leukocyte accumulation via nAChR in rat stomach</li>
                            <li>   VEGF and MMP-2 Changes in Physiological Aging Processes in the Eyeball</li>
                            <li>   The effect of exercise on anxiety- and depression-like behavior of aged rats</li>
                            <li>   Mild-intensity Exercise Triggers VEGF in the Digestive Tract Via Both Hypoxic and Nonhypoxic Mechanisms</li>
                            <li>   Effects of exercise on netrin-1 and TNF-α levels in non- inflammatory conditions</li>
                            <li>   Magnesium Acetyl Taurate Prevents Tissue Damage and Deterioration of Prosocial Behavior Related with Vasopressin Levels in Traumatic Brain Injured Rats</li>
                            <li>   Empathy as a Concept from Bench to Bedside: A Translational Challenge</li>
                            <li>   Yaşlı dişi sıçanlarda akut ve kronik stres yanıtlarının midede TNF-α ve IL-10 düzeylerine etkileri</li>
                            <li>   Probable Interaction of MMP-2 and VEGF in Testicular Deteriorations Related to Aging</li>
                            <li>   Dose-Dependent Absorption Profile of Different Magnesium Compounds</li>
                            <li>   Nicotine increased VEGF and MMP2 levels in the rat eye and kidney</li>
                            <li>   The Chronic Use of Magnesium Decreases VEGF Levels in the Uterine Tissue in Rats</li>
                            <li>   Regular Aerobic Voluntary Exercise Increased Oxytocin in Female Mice: The Cause of Decreased Anxiety and Increased Empathy-Like Behaviors</li>
                            <li>   Dose dependent effects of oxytocin on cognitive defects and anxiety disorders in adult rats following acute infantile maternal deprivation stress</li>
                            <li>   The role of serotonin and serotonin 2A receptor in the anxiety due to traumatic brain injury in immature rats</li>
                            <li>   Acetaminophen (paracetamol) affects empathy-like behavior in rats: Dose-response relationship</li>
                            <li>   The effects of acute foot shock stress on empathy levels in rats</li>
                            <li>   Regular aerobic exercise correlates with reduced anxiety and incresed levels of irisin in brain and white adipose tissue</li>
                            <li>   Statins reduce testicular and ocular VEGF: A potential compromise to microcirculation</li>
                            <li>   Statin treatment reduces oxidative stress-associated apoptosis of sciatic nerve in diabetes mellitus.</li>
                            <li>   Timeline (Bioavailability) of Magnesium Compounds in Hours: Which Magnesium Compound Works Best?</li>
                            <li>   Exercise increases leptin levels correlated with IGF-1 in hippocampus and prefrontal cortex of adolescent male and female rats</li>
                            <li>   Effects of administration of subtoxic doses of acetaminophen on liver and blood levels of insulin-like growth factor-1 in rats</li>
                            <li>   Effects of voluntary and involuntary exercise on cognitive functions, and VEGF and BDNF levels in adolescent rats</li>
                            <li>   The effects of oxytocin on cognitive defect caused by chronic restraint stress applied to adolescent rats and on hippocampal VEGF and BDNF levels</li>
                            <li>   Effects of carbon dioxide exposure on early brain development in rats</li>
                            <li>   Anxiety- and depression-like behavior are correlated with leptin and leptin receptor expression in prefrontal cortex of streptozotocin-induced diabetic rats</li>
                            <li>   Potential Novel Biomarkers for Diabetic Testicular Damage in Streptozotocin-Induced Diabetic Rats: Nerve Growth Factor Beta and Vascular Endothelial Growth Factor</li>
                            <li>   Effects of exercise and poor indoor air quality on learning, memory and blood IGF-1 in adolescent mice</li>
                            <li>   Positive effects of aerobic exercise on learning and memory functioning, which correlate with hippocampal IGF-1 increase in adolescent rats</li>
                            <li>   Progesterone treatment decreases traumatic brain injury induced anxiety and is correlated with increased serum IGF-1 levels; prefrontal cortex, amygdala, hippocampus neuron density; and reduced serum corticosterone levels in immature rats</li>
                            <li>   Serum IGF-1 levels correlate negatively to liver damage in diabetic rats</li>
                            <li>   Preliminary investigation of association between indoor air quality and emergence of depressive symptoms</li>
                            <li>   Combined treatment with progesterone and magnesium sulfate positively affects traumatic brain injury in immature rats</li>
                            <li>   Bir Üniversitedeki Adölesan ve Erişkinlerde Hasta Bina Sendromu Belirtilerinin CO2 ile İlişkisinin İncelenmesi</li>
                            <li>   Anxiety correlates to decreased blood and prefrontal cortex IGF-1 levels in streptozotocin induced diabetes</li>
                            <li>   Anxiety caused by traumatic brain injury correlates to decreased prefrontal cortex VEGF immunoreactivity and neuron density in immature rats</li>
                            <li>   Maternal aerobic exercise during pregnancy can increase spatial learning by affecting leptin expression on offspring's early and late period in life depending on gender</li>
                            <li>   Maternal treadmill exercise during pregnancy decreases anxiety and increases prefrontal cortex VEGF and BDNF levels of rat pups in early and late periods of life</li>
                            <li>   The Effects of the Melatonin Treatment on the Oxidative Stress and Apoptosis in Diabetic Eye and Brain</li>
                            <li>   Acute footshock-stress increases spatial learning-memory and correlates to increased hippocampal BDNF and VEGF and cell numbers in adolescent male and female rats</li>
                            <li>   Age-related changes in apoptosis in rat hippocampus induced by oxidative stress</li>
                            <li>   Relationship between circulating IGF-1 levels and traumatic brain injury-induced hippocampal damage and cognitive dysfunction in immature rats</li>
                            <li>   Statin treatment reduces oxidative stress-associated apoptosis of sciatic nerve in diabetes mellitus</li>
                            <li>   Maternal exercise decreases maternal deprivation induced anxiety of pups and correlates to increased prefrontal cortex BDNF and VEGF</li>
                            <li>   Sıçanlarda Spasyal Belleğin Adölesan Dönem Süresince Gelişimi</li>
                            <li>   The effect of melatonin on experimentally-induced myringosclerosis in rats</li>
                            <li>   The Histologic Evaluation of Atorvastatin and Melatonin Treatment on Oxidative Stress and Apoptosis of Diabetic Rat Pancreas</li>
                            <li>   Protective effect of an adenosine A1 receptor agonist against metamidophos-induced toxicity and brain oxidative stress.</li>
                            <li>   Protective effects of deprenyl in transient cerebral ischemia in rats.</li>
                            <li>   Preliminary investigation of sensitive biomarkers of trace metal pollution in mussel (Mytilus galloprovincialis) from Izmir Bay (Turkey)</li>
                            <li>   Effects of Repeated Maternal Separation On Oxidative Stress In Adolescent Male and Female Rat Brains</li>
                            <li>   Effect of Melatonin on Testicular Damage in Streptozotocin-Induced Diabetes Rats</li>
                            <li>   Short-term melatonin treatment improved diabetic nephropathy but did not affect hemorheological changes in diabetic rats</li>
                            <li>   The effect of melatonin on endotoxemia-induced intestinal apoptosis and oxidative stress in infant rats</li>
                            <li>   Protective effect of melatonin against maternal deprivation-induced acute hippocampal damage in infant rats</li>
                            <li>   Deprenyl and the Relationship Between Its Effects on Spatial Memory, Oxidant Stress and Hippocampal Neurons in Aged Male Rats</li>
                            <li>   Protective effects of erythropoietin against ethanol-induced apoptotic neurodegenaration and oxidative stress in the developing C57BL/6 mouse brain</li>
                            <li>   Effects of maternal deprivation on melatonin production and cognition in adolescent male and female rats</li>
                            <li>   Age-dependent effects of maternal deprivation on oxidative stress in infant rat brain</li>
                            <li>   Protective effect of melatonin against head trauma-induced hippocampal damage and spatial memory deficits in immature rats</li>
                            <li>   Effect of L-carnitine on diabetogenic action of streptozotocin in rats.</li>
                            <li>   Effects of Acute Footshock Stress on Antioxidant Enzyme Activities in the Adolescent Rat Brain</li>
                            <li>   The effects of regular aerobic exercise in adolescent period on hippocampal neuron density, apoptosis and spatial memory</li>
                            <li>   Does antioxidant supplementation alter the effects of acute exercise on erythrocyte aggregation, deformability and endothelium adhesion in untrained rats?</li>
                            <li>   Effect of Melatonin on Brain Oxidative Damage Induced by Traumatic Brain Injury in Immature Rats</li>
                            <li>   Effects of Melatonin on Oxidative Stress and Spatial Memory Impairment Induced by Acute Ethanol Treatment in Rats</li>
                            <li>   Adölesan siçan beyninde antioksidan enzim aktiviteleri ve lipid peroksidasyon düzeyleri</li>
                            <li>   Kemirgende Ve İnsanda Beyin Gelişimi</li>
                            <li>   Erythropoietin improves long-term spatial memory deficits and brain injury following neonatal hypoxia–ischemia in rats</li>
                            <li>   Positive effects of deprenyl and estradiol on spatial memory and oxidant stress in aged female rat brains</li>
                            <li>   Effects of sprint exercise on oxidative stress in skeletal muscle and liver</li>
                            <li>   Methamphetamine causes depletion of glutathione and an increase in oxidized glutathione in the rat striatum and prefrontal cortex</li>
                            <li>   Antioxidant enzyme levels in intestinal and renal tissues after a 60-minute exercise in untrained mice</li>
                            <li>   Effects of footshock stress on superoxide dismutase and glutathione peroxidase enzyme activities and thiobarbituric acid reactive substances levels in the rat prefrontal cortex and striatum</li>
                            <li>   The effects of single dose of methamphetamine on lipid peroxidation levels in the rat striatum and prefrontal cortex</li>
                            <li>   Sprint egzersizin fare iskelet kasında lipid peroksidasyonuna etkisi.</li>
                            <li>   Lipid peroxidation and antioxidant enzyme levels of intestinal renal and muscle tissues after a 60 minutes exercise in trained mice</li>
                            <li>   Bir yaz okuluna katılan çocukların fiziksel ve fizyolojik özelliklerinin Eurofit test bataryası ile belirlenmesi.</li>
                            <li>   Metamfetaminin prefrontal kortekste antioksidan enzimler ve lipid peroksidasyonuna etkisi</li>
                            <li>   Methamphetamine causes lipid peroxidation and an increase in superoxide dismutase activity in the rat striatum</li>
                        </ul>

                        <p className="font-nexa-bold">
                            KİTAP İÇİ BÖLÜM YAZARI:
                        </p>
                        Environmental exposures can affect apoptosis in developing brain. Neuronal Cell Apoptosis Research... 2007
                        <p className="font-nexa-bold">
                            KİTAP İÇİ BÖLÜM ÇEVİRİSİ:
                        </p>
                        Guyton Fizyoloji
                        Berve Levy, Fizyoloji.

                    </AcademicsListModal>}
                </div>
                <div className="leading-none rounded-md ml-[160px] rounded-bl-3xl bg-opacity-80 overflow-hidden md:min-h-[264px] md:max-h-[264px] md:min-w-[710px] md:max-w-[710px] relative bg-secondary-flat">
                    <div className="absolute  right-0 bottom-0 rotate-[-13deg] h-[120px] w-[280px]">
                        <Image src="/images/svg/brandmark5.svg" layout="fill" />
                    </div>
                    <Text type="h5" className="text-[white] !font-nexa-regular !text-[34px] mt-[20px] md:mt-[52px] ml-[34px] mr-[61px] md:mb-[44px] mb-[100px]">
                        “Doğru beslenme ile herkes daha
                        iyi sağlığın keyfini çıkarabilir.
                        Yolculuğunuza rehberlik etmek için buradayım.”
                    </Text>
                </div>
            </div>
        </Container>
        <Container className="!max-w-[100vw] h-[245px] mb-[40px]" >
            <Container className=" h-full">
                <FloatingImages images={[
                    "f1.png",
                    "f2.png",
                    "f3.png",
                    "f4.png",
                    "f5.png",
                    "f6.png",
                    "f7.png",
                    "f8.png",
                ]} to="right" />
            </Container>
        </Container>
        <Container className="!max-w-[100vw] h-[245px] mb-[40px]" >
            <Container className=" h-full">
                <FloatingImages images={[
                    "f3.png",
                    "f4.png",
                    "f8.png",
                    "f2.png",
                    "f6.png",
                    "f1.png",
                    "f5.png",
                    "f7.png",
                ]} to="left" />
            </Container>
        </Container>
    </LandingLayout>
}

export default Hakkimda;

