import Section from ".";
import Text from "@components/Text/Text";
import Button from "@components/button/Button";
import TrainingCard from "@components/Card/TrainingCard";

const TrainingsData = [
    {
        title: 'Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 1',
        description: 'Eğitimlerimizde fonksiyonel beslenmenin neden önemli olduğunu anlatacağız. Sağlıklı mutfak ve sağlıklı tabak nasıl oluşturulur...',
        price: '1,000TL',
        imagename: 'bg-e1'
    },
    {
        title: 'Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 2',
        description: 'Eğitimlerimizde fonksiyonel beslenmenin neden önemli olduğunu anlatacağız. Sağlıklı mutfak ve sağlıklı tabak nasıl oluşturulur...',
        price: '1,000TL',
        imagename: 'bg-e2'
    },
    {
        title: 'Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 3',
        description: 'Eğitimlerimizde fonksiyonel beslenmenin neden önemli olduğunu anlatacağız. Sağlıklı mutfak ve sağlıklı tabak nasıl oluşturulur...',
        price: '1,000TL',
        imagename: 'bg-e3'
    },
    {
        title: 'Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 4',
        description: 'Eğitimlerimizde fonksiyonel beslenmenin neden önemli olduğunu anlatacağız. Sağlıklı mutfak ve sağlıklı tabak nasıl oluşturulur...',
        price: '1,000TL',
        imagename: 'bg-e4'
    },
    {
        title: 'Fonksiyonel Tıp ve Fonksiyonel Beslenme Programı - 5',
        description: 'Eğitimlerimizde fonksiyonel beslenmenin neden önemli olduğunu anlatacağız. Sağlıklı mutfak ve sağlıklı tabak nasıl oluşturulur...',
        price: '1,000TL',
        imagename: 'bg-e5'
    },
]

const HomeTrainingsSection = () => {
    return (
        <Section className="h-fit flex flex-col pb-10 md:pt-[70px] md:pb-0 w-full md:h-[690px] bg-white">
            <div className="md:flex md:flex-row md:h-fit w-fit max-w-[1920px] mx-auto">
                <div className="flex h-fit flex-col w-[90%] mx-auto md:self-center md:w-[50%]">
                    <Text className="md:text-[34px] text-[28px] text-active-onPrimary" type="bold">Eğitimler</Text>
                    <Text className="md:text-[18px] text-[16px] text-active-onPrimary" type="regular">
                        “Olumlu beslenme ve yaşam tarzı değişikliği ile daha sağlıklı bir yaşam mümkün. “
                    </Text>
                    <Text className="md:text-[18px] text-[16px] text-active-onPrimary" type="light">
                        Misyonum, sağlığını olumlu beslenme ve yaşam tarzı değişikliği yoluyla dönüştürmek isteyen herkese kişiselleştirilmiş, özenli hizmetler sunmaktır. Sağlığınızı iyileştirme ve size faydalı bilgiler sunmak konusunda tutkuluyum.
                    </Text>
                </div>
                <div className="w-[90%] flex md:justify-end md:items-end h-fit mx-auto md:w-[30%]">
                    <Button className="w-full md:w-fit" type="primary" >
                        Tüm Eğitimler
                    </Button>
                </div>
            </div>
            <div className="md:flex flex flex-col gap-[16px] md:flex-row md:h-fit w-fit max-w-[1920px] mt-4 mx-auto">
                {
                    TrainingsData.map((item, index) => <TrainingCard  {...item} key={index} />)
                }
            </div>
        </Section>
    );
}

export default HomeTrainingsSection;