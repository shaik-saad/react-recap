function Card({cardData}){

    const {title, image, tags, author, social} = cardData

    const tagSpans = tags.map(tag => (
                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">#{tag}</span>
                      ));

    return (
        <>
            <div className="flex max-w-2xl flex-col items-center rounded-md border mb-2 md:flex-row">
                <div className="h-full w-full md:h-[200px] md:w-[300px]">
                    <img
                    src={image}
                    alt="Laptop"
                    className="h-full w-full rounded-md object-cover"
                    />
                </div>
                <div>
                    <div className="p-4">
                    <h1 className="inline-flex items-center text-lg font-semibold">
                        {title}
                    </h1>
                    <p className="mt-3 text-sm text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                    </p>
                    <div className="mt-4">
                        {tagSpans}
                    </div>
                    <div className="mt-3 flex items-center space-x-2">
                        <img
                        className="inline-block h-8 w-8 rounded-full"
                        src={image}
                        alt="Dan_Abromov"
                        />
                        <span className="flex flex-col">
                        <span className="text-[10px] font-medium">{author}</span>
                        <span className="text-[8px] font-medium text-gray-500">{social}</span>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;