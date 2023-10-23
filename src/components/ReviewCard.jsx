
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

// buat array di review card

const reviews = [
    {
        id: 1, name: "David Lamboy", 
        company: "PT DIGITAL SAE",
        image: "/src/assets/Avatar-1.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
    {
        id: 2, name: "Riza Miftah", 
        company: "PT Belajar Astro",
        image: "/src/assets/Avatar-2.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
    {
        id: 3, name: "Toni Adi", 
        company: "Guardian",
        image: "/src/assets/Avatar-3.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
     {
        id: 4, name: "David Lamboy", 
        company: "PT DIGITAL SAE",
        image: "/src/assets/Avatar-1.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
    {
        id: 5, name: "Riza Miftah", 
        company: "PT Belajar Astro",
        image: "/src/assets/Avatar-2.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    },
    {
        id: 6, name: "Toni Adi", 
        company: "Guardian",
        image: "/src/assets/Avatar-3.png",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra."
    }
]

const ReviewCard = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                reviews.map(review => 
                <SwiperSlide key={review.id} className='mb-20 border border-[##006B6A] p-8 rounded'>
                    <div>
                        <img src="/src/assets/starts.png" alt="" className='h-4'/>
                        <p className='my-5'>{review.comment}</p>
                        <div className='flex items-center gap-4'>
                            <img src={review.image} alt="" className='h-10 w-10'/>
                            <div>
                                <p className='font-semibold'>{review.name}</p>
                                <p className='text-sm'>{review.company}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    );
}

export default ReviewCard;