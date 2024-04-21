import React from 'react'

function VideoPage() {
    return (
        <>
            <div className=' mt-10 flex flex-col md:flex-row justify-between px-4 md:px-14 dark:bg-gray-950 dark:text-white transition-colors'>
                <aside className='md:w-[54%] w-full flex flex-col gap-4'>
                    <h1 className='ml-4 my-0'>Video Title will be placed here</h1>
                    <div className='w-full rounded-2xl overflow-hidden shadow-2xl'>
                        <video width="100%" height="100%" src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" controls />
                    </div>
                    {/* <iframe className='rounded-2xl' width="100%" height="350"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    >
                    </iframe> */}
                    <div className='w-full flex flex-col items-center'>
                        <div className='relative h-2 py-2 my-[.6rem] w-full rounded-lg shadow-md bg-white'>
                            <span className='absolute bg-gray-700 top-1/2 translate-y-[-50%] left-1 w-1/3 h-3 rounded-full'></span>
                        </div>
                        <div className='rating w-full rounded-full border border-gray-700 shadow-md flex justify-between px-5 bg-white h-10'>
                            <div className="relative star w-[50%] overflow-y-hidden">
                                <img className='absolute h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1YfZzb4akZgrK8JVyDHOV-fcMB070NCelzCN5w2Oj4YAlG7RxWnN8Qjd2snUF0PVsw&usqp=CAU" alt="" />
                                <span className='absolute w-[58%] h-full top-0 right-0 bg-white mix-blend-color'></span>
                            </div>
                            <div className='w-auto flex justify-end gap-4 py-1'>
                                <img className='cursor-pointer hover:opacity-80' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC9CAMAAAB8rcOCAAAAgVBMVEUDBAT///8AAACurq7t7e3k5OSNjY3g4ODS0tKVlZW1tbVZWVnz8/OEhIT6+vra2tp2dnbFxcWjo6O9vb1ERESbm5tKSkp9fX3Ozs5gYGDo6OiqqqoxMTESExM9PT3w8PAbHByJiYlTU1NqamokJCQODg41NTUiIyNmZmYXGBgqKytq3wrFAAAJ4klEQVR4nN3d53biOhAAYGXozRgwEHqAsCnv/4DrArhg2SozI8j8u/dkI+U7LpI8Gom3pwivM9n0/NVi+3ERQuy+9oPzaN7vNjn7IDgbK43hpLe6wD1CCZH+F+yXjQ5TR9xSeJPR5x2gLBKPwZSDwyHFYbOoUsh7iNE7dX9cUXiNhRJDlmM0Ju2SG4qxr+Vw19g2CDvlgmK2N4C4aRwPVN3ip+h/GDrcMPw1Tce4KWY7G4irhk9yZfBSdLfWEAlGm6BznBTDbxSI2AJm6N1jpNhgQSQYC+xRORtFc48pEWNMcXvIRdFAhogtFkPMLjJRrPAlYowJYh9ZKFoXCojY4ojXSw6KGcklccVYoHWTgaJHKBFa/GC9SegpfEqIyAKQJqzkFANiicgCZymDmmJBLoH2IiGmCBgksCxoKTiuCTQLUgr650RqYf/spKSgfnfkLawXdAgp5owSkYVn2V86igmrRGixt+wwGcWadIxZauHb9ZiM4oNbIrToW/WYiuLML2H76CSimDmQCC1+bfpMQzFkf1BcLWxWwmko+MZWRQuLkRYJhZvbI6awuEVIKBzdHrGF+TI4BcXInUT4FjFeBSegWDuUsBloEVCsnFIIME1WwqcYq0uAPCwoBoYdx6c4Kf8ZFRJWFoYvVHQKnYtC/oSzed6YXhboFBpPCpB/wWjZPG+gZdRzbIqmTtYdFYXZSwSb4vgMFGYLWtgUWrmYRBSGQ05kCq3ZBx3Fl0nfkSnU36SUFGbvU1yKodZfQEgxMug8LsXmWSjAoPO4FFr3ByGFgK5+51EpPL0/gJLCYGUPlULzKxAlhcFqlg3FsDPpT3ujpR/G8tjbTDRX/AkpBOingZtReN2NH1hPJ0kp9BOf9SmGs9HWdh7NQKH/OtWk6Mz3GAjX7lJS/COlWPe+0Bji7lJS6I8s1Cn6AaqDoKUwGHsrUgx72A6CmkL7s7oSRdNkA6BCb0kptAdZChQHGghiCgGB5vu0nqJN9tmPliJaUJ/rLGfVUfSJroi4r7QUMcZIfdRZTdFcUH4JJqdItqWqYlRSTGk/iTNQRK3AUu02qaAYkl4SgosifmbYUUzIsySYKGIMhRxwKQXdiyPtIRdFhHGq3Uwko9BbmjPsHx+FyrbUcorhJ0eOBCtFaLGvvjBKKVo8yVS8FBHGRpdizJRWxk0RWqz0KLgk+CnCJoU8PemRgk3CBUV4YUgn7w8UTM+JuFsOKEIL2apnkeLAmH7qhEKeoFSk4NzG4YhCwL50UlKg4NoNmXTJEYWAj7KEuDwFb0qyM4rwRVIyc89RMGfsu6MoTQXPUjSZM/YdUgjYPVhkKfbc2yEdUgj4rKDg3SIrHFMICKQUDjaGOqUQcJZRcN8ezikE9Mop+g62yDqmEPlyKHcKB/u93FPkcnNuFG0Xu4VdU+S39F8pnOyRdU+Re1xcKZxsAnwCiuxOM8FyUUg2RVVRoO+jkvQszWpMKHrEEsd2WYzkG6YOo9J/0cPfrZh+OUsoqC+Kb+nfrBceRanK21skpiAfUxhl4pfEF0Xuz23QGVPQDzQBpRY5zSe7WwJbRMEy4DdIxS/GkqafcEopOIZXCHWrpmQfBMZ3ih3L3GdnWbfqne57wOlGobFf2KrB4vqAXlCuISR7dAX5oCJt0KZuFcFrtNgzwbhQoZYHVB6knUz26ArdXU5WTRqXgvwmHgM2YgrGWndgWmaD+h6OJ+uCdaXCsBIN/feZ6FUvWLKu0ia3BhIMaQ5RopZgXskzqLPB8XE/qowudApOoDR61KXgSZHz3gTdIE7WqObMjOcGDl9uosH/+UNrZkY0B3vo1PFNcI01M61WLOQ9hN6Gf4tOBW+CST3X7I+yBNvtC/AmXNQ2U56ZMX7HhZbgKUVfbFdtZuYJzkmB+HVBoTgz4/yiDVPBsm5T0rLCzIy11DEcGRvLt1w/M+N9t8GZs7V803UzM+4cuRNrc/m2q2dmfKnm1+78EzvWBnONV+1IYP+0Dz+CZbIjaf0op+Dv1sXNuOIa8g0JrIsot0CuPq6VAwCymVltugdJqgHu0S7Q72ZiXJc9L5mZ1c7BoDfONoMyj9ohz0wLBVBrL7nSmVn9HKxwZ2H8DfCLvF5RGDjV330lZwwqzMEoKBbIq1jaFI8zM0/hmEsKipXArcWuT/FQMlXllUZBsURe8TagKMzMlOZgFBRzgXt2nhFF9lmr9ldRUMwEbsqmCUW2wrLiHIyCYixwZ4BGFGmVt47i3UpB4Ym3g3uK28xMeQ6GTwFfUX4F5pKeIcW1oJdyTwgo/IgC81O6KUX8x+n9NDJFI6LoPgUFdDRq5BNQrOMMPcSRhTGF0JpfolPAR5KsiPiBzJxC65MHPsUxoUC8QywotJpBp+hec7zxyhO8KAVEDDEFXsrwq1K0bxR4+aGvSrG+UeA9OAsUJ+kBUpbRQKVI1o8SCrRFiwLFrEETmw4uxSSlQPtSa3wUnFVYUkSDipQC67J4TYp+lgLrePdXpIDLW44C6Rslxr4o/bBbfbq9ju7b83EKeViez20YVu/s+6bbtH4FypATli4orK7o+4WcUqDMRIzOM7INq0856XbgTK0blHGWwREl1mGTb5lJ/slWQMLIULu+oznDahtgZtwqsH7n/Xcj7blWjx+bi+KU/p5ctTSUt0h11Vf8sMlKyeXG5WvoocwkC4WFaMOzKoCY+0ZZqKyI80YN2Macfbv36DH7uwoUOJuTABaNluW+6/oYduc7O4l8bkex9ChSuiTVOkUxrPpYyPh5qM1LX+r/SeIhD+yxYjNzQrGrgIcjqErqeNs9il4kIF80TkIRXhd/3qLslIzSmv9//nkBZVOl8pMguNPumaP85BTJ+SAHirJLzxKSfGrpqTEudhryhGyDkvwsIeLjpZwFfEq2J1WcMDVWSKt9vZCXSqg8d8z/cxcGVEybq0+je7/8LYySgZUqBcuZW2wBcKqaLteeXLke/BWMmlOVVM4z7QZ/AQMgqKkVoXTK7fvrY9RdEqoU4ZWxslwncRsA5/oqVMonYjfbtqtGzgLgn8rx2DrnpE++X1ED4KL2xU6HIozZ2XpJkTce8rbQKMLozhf2S6xMEV4R6qWn9CmiGDeWAd7SM1UAbHU+ZptRxHEYz6Zt//sU7Leoi/JYDvCtlwJkQVGAaY0ns8386H8vfp3LhE3+zHWLOKJR5MM7tLqJzIpdJmphaZATRkRRiFimL5FBd/DNir3yUBTCa3Yimd7IXwWfeNdM9I8/2xXT8OpwQlGIRGYaygyCLzOU+Mcvfl+jOt9DPANFIa4yx4USyPWHFu2ZDUMUT0iRxnoy9/clN0/uf+39+cS6iH4UT02RhNd670/by/Mg2H7sLqHE5WMbDM7L9nT2jpnF8R8+n5PC61pklgAAAABJRU5ErkJggg==" alt="" />
                                <img className='cursor-pointer hover:opacity-80' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEudfpU8j_bs64bqiAlZNXk7xGuC0LCHr9w&usqp=CAU" alt="" />
                            </div>
                        </div>
                        <p className='w-[85%] text-center mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro temporibus iste fuga illum soluta dolorum provident itaque?</p>
                    </div>
                    <div className='note  flex flex-col items-center'>
                        <div className='flex gap-3 mt-3'>
                            <h2>Note</h2>
                            <img className='h-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrQQyDzraK-fywQVCs0gmCssQFXTZmoM3LQ&usqp=CAU" alt="" />
                        </div>

                        <div className='relative shadow-2xl rounded-xl mb-3 w-[17rem] h-[17rem] bg-gray-100 overflow-hidden'>
                            <textarea className='resize-none w-full h-full pr-8 pt-10 border-none' name=""></textarea>
                            <span className='absolute top-2 right-2 w-7 cursor-pointer'><img src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png" alt="" /></span>
                        </div>
                    </div>
                </aside>
                <aside className='md:w-[46%] md:mt-0 mt-6 w-full flex justify-end pl-6 gap-2 '>
                    <div className="md:w-[76%] w-full flex flex-col items-center gap-2 border border-gray-500 bg-white rounded-2xl p-3">
                        <div className='text-center w-[10rem] mt-3'>
                            <img className='w-[10rem] rounded-full object-cover h-[10rem]' src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png" alt="" />
                            <h2>John Doe</h2>
                        </div>
                        <hr className='border-black w-[80%] mb-4'/>
                        <div className="video-prog w-[90%] flex flex-col gap-2">
                            <div className='relative w-full h-12 rounded-full p-1 bg-stone-400'>
                                <div className=' z-1 bg-stone-600 rounded-full w-[38%] overflow-visible h-full '>
                                    <img className='absolute top-1/2 translate-y-[-50%] left-1 h-11 w-11 z-10 object-cover' src="https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png" alt="video icon" />
                                    <p className='absolute top-1/2 left-0 w-full translate-y-[-50%] text-center font-bold '>Chapter 01 Basics of HTML</p>
                                </div>
                            </div>
                            <div className='relative w-full h-12 rounded-full p-1 bg-stone-400'>
                                <div className=' z-1 bg-stone-600 rounded-full w-[48%] overflow-visible h-full '>
                                    <img className='absolute top-1/2 translate-y-[-50%] left-1 h-11 w-11 z-10 object-cover' src="https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png" alt="video icon" />
                                    <p className='absolute top-1/2 left-0 w-full translate-y-[-50%] text-center font-bold '>Chapter 02 Basics of Css</p>
                                </div>
                            </div>
                            <div className='relative w-full h-12 rounded-full p-1 bg-stone-400'>
                                <div className=' z-1 bg-stone-600 rounded-full w-[88%] overflow-visible h-full '>
                                    <img className='absolute top-1/2 translate-y-[-50%] left-1 h-11 w-11 z-10 object-cover' src="https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png" alt="video icon" />
                                    <p className='absolute top-1/2 left-0 w-full translate-y-[-50%] text-center font-bold '>Chapter 03 Basics of javascript</p>
                                </div>
                            </div>
                            <div className='relative w-full h-12 rounded-full p-1 bg-stone-400'>
                                <div className=' z-1 bg-stone-600 rounded-full w-[48%] overflow-visible h-full '>
                                    <img className='absolute top-1/2 translate-y-[-50%] left-1 h-11 w-11 z-10 object-cover' src="https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png" alt="video icon" />
                                    <p className='absolute top-1/2 left-0 w-full translate-y-[-50%] text-center font-bold '>Chapter 04 Basics of tailwindcss</p>
                                </div>
                            </div>
                        </div>
                        <div className="certificate px-4 bg-stone-300 mt-6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtabE7782ZI-k1Nrd9u32r9yKTibYcAUuDyw&usqp=CAU" alt="" />
                        </div>
                        <div className="w-full text-center mt-4">
                            <img className='w-10 mx-auto cursor-pointer hover:opacity-80' src="https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png" alt="" />
                            <p className='text-sm font-semibold mt-2'>Unlock This certificate</p>
                        </div>
                    </div>


                </aside>
            </div>
        </>
    )
}

export default VideoPage
