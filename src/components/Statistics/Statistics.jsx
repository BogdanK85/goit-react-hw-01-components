import PropTypes from 'prop-types';
import { StatisticsLabel, StatisticsList, StatisticsListItem, StatisticsPercentage, StatisticsSection, StatisticsTitle } from './Statistics.styled';
import { getRandomColor } from 'helpers/RandomColor/RandomColor';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsSection>
            {title && (<StatisticsTitle>{title}</StatisticsTitle>)}

            <StatisticsList>
                {stats.map(({ id, label, percentage }) => (
                    <StatisticsListItem key={id} style={{ backgroundColor: getRandomColor() }}>
                        <StatisticsLabel>.{label}</StatisticsLabel>
                        <StatisticsPercentage>{percentage}%</StatisticsPercentage>
                    </StatisticsListItem>
                ))}
            </StatisticsList>
        </StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
}