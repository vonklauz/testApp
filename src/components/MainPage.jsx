import React, { useState, useEffect } from 'react';
import EstateMap from './map/Map';
import EstateCard from './estate/EstateCard';
import { Box, Typography, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import FilterSelect from './filter/FilterSelect';
import FilterInput from './filter/FilterInput';

export default function MainPage() {
    const [dataList, setDataList] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(true)

    const filters = {
        main: ["Вид недвижимости", "Покупка", "Город", "Сегмент", "Отделка"],
        location: ["Станция", "Округ", "Район"],
        price: ["Цена, от", "Цена, до", "Цена м2 от", "Цена м2 до"],
        area: ["Площадь, от", "Площадь, до"],
        other: ["Срок сдачи"]
    }

    const scrollHandler = (e) => {
        if (e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100) {
            setCurrentPage(prevsState => prevsState + 10)
            setLoading(true)
        }
    }

    useEffect(() => {
        if (loading) {
            console.log(currentPage)
            fetch(`https://jsonplaceholder.typicode.com/photos?_start=${currentPage}&_limit=10`)
                .then(res => res.json()).then(res => setDataList([...dataList, ...res]))
                .finally(() => setLoading(false))
        }
    }, [loading])

    return (
        <main>
            <Box display="flex" className="main">
                <div className="main__filters">
                    <div className="main__filters__header">
                        <Typography variant="h5">
                            Фильтр
                        </Typography>
                        <Button>
                            <CloseIcon />
                        </Button>
                    </div>
                    <div className="main__filters__group">
                        {filters.main.map((filter, index) => <FilterSelect placeholder={filter} key={filter + index} />)}
                    </div>
                    <div className="main__filters__group">
                        {filters.location.map((filter, index) => <FilterSelect placeholder={filter} key={filter + index} />)}
                    </div>
                    <div className="main__filters__group">
                        {filters.price.map((filter, index) => <FilterInput placeholder={filter} key={filter + index} />)}
                    </div>
                    <div className="main__filters__group">
                        {filters.area.map((filter, index) => <FilterInput placeholder={filter} key={filter + index} />)}
                    </div>
                    <div className="main__filters__group">
                        {filters.other.map((filter, index) => <FilterSelect placeholder={filter} key={filter + index} />)}
                    </div>
                </div>
                <div className="main__map">
                    <EstateMap />
                </div>
                <div className="main__estate-list" onScroll={scrollHandler}>
                    {dataList.map((item, index) => <EstateCard data={item} index={index} key={item.id} />)}
                </div>
            </Box>
        </main>
    )
}