import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import PlaceIcon from '@material-ui/icons/Place';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function EstateCard({ data = {}, index, orientation = 'vertical' }) {

    const cardClass = orientation === 'vertical' ? 'estate-card estate-card__vertical' : 'estate-card estate-card__horizontal'

    return (
        <Card className={cardClass}>
            <CardActionArea>
                <CardMedia
                    className="estate-card__img"
                    image={data.url}
                    title=""
                >
                    <div className="estate-card__header">
                        <div>
                            <span className="estate-card__header__span estate-card__header__promote">Акции</span>
                            <span className="estate-card__header__span estate-card__header__best">Хит</span>
                        </div>
                        <span className="estate-card__header__heart">
                            <img src="/heart.svg" alt="" />
                        </span>
                    </div>
                </CardMedia>
                <CardContent className="estate-card__content">
                    <div className="estate-card__info">
                        <Typography className="estate-card__info__price" component="p">
                            от {'1 000 00' + data.id}
                        </Typography>
                        <Typography className="estate-card__info__deadline" component="p">
                            Срок сдачи: 2 кв. 2021 г. - 4 кв. 2022 г.
                        </Typography>
                        <Typography className="estate-card__info__name" component="p">
                            {data.title.slice(1, 15)}
                        </Typography>
                    </div>
                    <div className="estate-card__info">
                        <Typography className="estate-card__info__address" component="p">
                            Нансена 83
                        </Typography>
                        <Typography className="estate-card__info__flat" component="p">
                            C — от 24.98 кв.м. от 2 672 860 р
                        </Typography>
                        <Typography className="estate-card__info__flat" component="p">
                            1к — от 33.90 кв.м. от 3 288 300 р
                        </Typography>
                        <Typography className="estate-card__info__flat" component="p">
                            2к — от 45.63 кв.м. от 4 152 330 р
                        </Typography>
                        <Typography className="estate-card__info__flat" component="p">
                            3к — от 76.85 кв.м. от 6 993 350 р
                        </Typography>
                        <Typography className="estate-card__info__flat" component="p">
                            4+ —
                        </Typography>
                        <Typography className="estate-card__info__num" component="p">
                            В продаже {index + 1} квартир
                            <PlaceIcon className="estate-card__info__icon"/>
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}