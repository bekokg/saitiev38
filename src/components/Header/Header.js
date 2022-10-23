import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import "./Header.css";

const Header = () => {
  const [tabValue, setTabValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      "aria-controls": `nav-tabpanel-${index}`
    };
  }

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={event => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    }
  }));
  return (
    <div className={useStyles().root}>
      <AppBar position="fixed">
        <div style={{ borderBottom: "1px solid white", height: "20px" }}>
          top
        </div>
        <div className="header">
          <div className="logo">
            <SchoolIcon
              fontSize="large"
              style={{ fontSize: "65px", paddingRight: "5px" }}
            />
            <h4 style={{ width: "40px", display: "inline-block" }}>
              Сулайман Айтиев мектеби
            </h4>
          </div>
          <Tabs
            // variant="fullWidth"
            aria-label="nav-tabs"
            value={tabValue}
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <LinkTab label="Биз жөнүндө" href="/about" {...a11yProps(0)} />
            <LinkTab
              label="Башталгыч мектептер"
              href="/elementary"
              {...a11yProps(1)}
            />
            <LinkTab label="Лицейлерибиз" href="/lyceum" {...a11yProps(2)} />
            <LinkTab label="Жаңылыктар" href="/news" {...a11yProps(3)} />
            <LinkTab label="Долбоорлор" href="/projects" {...a11yProps(4)} />
            <LinkTab label="Байланыш" href="/contact" {...a11yProps(5)} />
          </Tabs>
          <SearchIcon />
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
