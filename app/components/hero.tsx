export default function Hero({
    title, subTitle, buttonTitle
}:{
    title:string,
    subTitle:string,
    buttonTitle:string,
}){
    return(
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                <h1 className="text-5xl font-bold">{ title }</h1>
                <p className="py-6">
                    {subTitle}
                </p>
                <button className="btn btn-primary">{buttonTitle}</button>
                </div>
            </div>
        </div>
    )
}