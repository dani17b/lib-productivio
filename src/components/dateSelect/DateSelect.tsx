import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export interface DateSelectProps{
  /**
   * Label string for the date time selector 
   */
  label: string;
  /**
   * Todays date to show as default date 
   */
  defaultDateAndTime: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export const DateSelect = (props: DateSelectProps) => {
  const {label, defaultDateAndTime} = props;
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label={label}
        type="datetime-local"
        defaultValue={defaultDateAndTime}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};
