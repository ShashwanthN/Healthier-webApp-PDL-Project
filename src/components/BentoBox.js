import React from "react";
import Example from "./FriendsChart";
import { SetTheme } from "../redux/theme";
import { ArrowUp, ArrowRight } from "lucide-react";
import CustomizedTables from './Nurition'
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 70
   */
  value: PropTypes.number.isRequired,
};


function BentoBox() {
  const [progress, setProgress] = React.useState(10);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main className="flex flex-col md:flex-row w-full">
      <section className="grid grid-cols-1 md:grid-cols-4 w-full gap-4">
        <div
          className={`p-6 border border-divider hover:scale-105 transition-transform ease-in  bg-bgSecondary rounded-sm flex-col flex gap-1 col-span-2 row-span-2`}
        >
          <Example />
          <div className="justify-center text-bgAccent flex">
            <span className="px-8 flex">
              <ArrowUp />
              Y-Axis: Calories
            </span>
            <span className="px-8 flex">
              <ArrowRight />
              X-Axis: Days
            </span>
          </div>
        </div>
        <div className="p-6 border border-bgAccent bg-bgTertiary flex-col flex gap-1 col-span-1 row-span-1">
          <div></div>
        </div>
        <div className="p-6 border flex-col border-bgAccent flex gap-1 col-span-1 row-span-1">
          <div className="flex text-textPrimary">
            <span>Monthly goals</span>
            <span className="px-3">
            <CircularProgressWithLabel value={progress} />
            </span>
          </div>
        </div>
        <div className=" rounded-sm  border flex-col border-bgAccent flex gap-1 col-span-2 row-span-1">
          <div>
            <CustomizedTables />
            <div className="italic text-xs pl-2 pt-1 text-textSecondary">
              *NOTE THAT THE PRICES MAY VARY
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BentoBox;
