def count_words(text):
    # Split the text into words based on whitespace
    words = text.strip().split()
    return len(words)

def main():
    # Prompt user for input
    user_input = input("Enter your text: ")
    # Count words
    total_words = count_words(user_input)
    # Display the result
    print(f"Input Text: {user_input}")
    print(f"Word Count: {total_words}")

if __name__ == "__main__":
    main()

