import React from "react";
import Header from "../";
import App from "../../../App"
import { render, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'

jest.mock("../../../Api/Calls");

describe("Header Component", () => {
  const props = {
    page: 2,
    setPage: jest.fn(),
  };
  render(<Header {...props}/>);
  const headers = screen.getAllByRole('heading')
  
  describe("When the component initially loads", () => {
    it("Then a header should be rendered", () => {
      expect(headers[0]).toBeVisible();
    });

    it("and the correct title should be rendered", () => {
      expect(headers[0]).toHaveTextContent("STAR WARS CHARACTERS");
    });
  })

  describe("Header Page Navigation", () => {
    const buttons = screen.getAllByRole('button');
    const firstButton = buttons[0];
    const secondButton = buttons[1];

    describe("When the component initially loads", () => {
      it("Then two buttons should be rendered", () => {
        expect(buttons.length).toBe(2);
      });

      it("and the first button should be labelled 'Previous'", () => {
        expect(firstButton).toHaveTextContent("Previous");
      });

      it("and the second button should be labelled 'Next'", () => {
        expect(secondButton).toHaveTextContent("Next");
      });

      it("and the correct page number should be rendered", () => {
        const pageFiveProps = {
          page: 5,
          setPage: jest.fn(),
        };
        render(<Header {...pageFiveProps} />);
  
        const pageNumber = screen.getByRole('heading', { level: 3 });
        expect(pageNumber).toHaveTextContent("PAGE 5 OF 9");
      });
    });

    describe("When the current page is the first page", () => {
      it("Then the previous button should be disabled ", () => {
        const pageOneProps = {
          page: 1,
          setPage: jest.fn(),
        };
        render(<Header {...pageOneProps} />);
        const prevButton = screen.getByRole('button', { name: 'Previous' })

        expect(prevButton).toBeDisabled();
      });

      it("and the next button should be enabled", () => {
        const pageOneProps = {
          page: 1,
          setPage: jest.fn(),
        };
        render(<Header {...pageOneProps} />);
        const nextButton = screen.getByRole('button', { name: 'Next' })

        expect(nextButton).not.toBeDisabled();
      })
    });
    
    describe("When the current page is not the first or last page", () => {
      it("Then the previous button should be enabled", () => {
        const pageNineProps = {
          page: 5,
          setPage: jest.fn(),
        };
        render(<Header {...pageNineProps} />);
        const prevButton = screen.getByRole('button', { name: 'Previous' });
        
        expect(prevButton).not.toBeDisabled();
      });

      it("and the next button should be enabled", () => {
        const pageNineProps = {
          page: 5,
          setPage: jest.fn(),
        };
        render(<Header {...pageNineProps} />);
        const nextButton = screen.getByRole('button', { name: 'Next' });

        expect(nextButton).not.toBeDisabled();
      })
    });

    describe("When the current page is the last page", () => {
      it("Then the previous button should be enabled", () => {
        const pageNineProps = {
          page: 9,
          setPage: jest.fn(),
        };
        render(<Header {...pageNineProps} />);
        const prevButton = screen.getByRole('button', { name: 'Previous' });

        expect(prevButton).not.toBeDisabled();
      });

      it("and the next button should be disabled", () => {
        const pageNineProps = {
          page: 9,
          setPage: jest.fn(),
        };
        render(<Header {...pageNineProps} />);
        const nextButton = screen.getByRole('button', { name: 'Next' });

        expect(nextButton).toBeDisabled();
      });
    });

    describe("When the previous button is clicked", () => {
      it("Then the setPage function should be called", () => {
        const pageTwoProps = {
          page: 2,
          setPage: jest.fn()
        }
        render(<Header {...pageTwoProps} />);
  
        const prevButton = screen.getByRole('button', { name: 'Previous' });
        fireEvent.click(prevButton);
        expect(pageTwoProps.setPage).toHaveBeenCalled();
      });
    });

    describe("When the next button is clicked", () => {
      it("Then the setPage function should be called", () => {
        const pageTwoProps = {
          page: 2,
          setPage: jest.fn()
        }
        render(<Header {...pageTwoProps} />);
  
        const nextButton = screen.getByRole('button', { name: 'Next' });
        fireEvent.click(nextButton);
        expect(pageTwoProps.setPage).toHaveBeenCalled();
      });
    });
  });
});