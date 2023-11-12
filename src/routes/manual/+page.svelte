<div>
    <p>
        In reverse Polish notation, the operators follow their operands. For example, to add 3 and 4 together, the expression is 3 4 + rather than 3 + 4. The expression 3 − 4 + 5 in conventional notation is 3 4 − 5 + in reverse Polish notation: 4 is first subtracted from 3, then 5 is added to it.
    </p>
    
    
    <p>
        The concept of a stack, a last-in/first-out construct, is integral to the left-to-right evaluation of RPN. In the example 3 4 −, first the 3 is put onto the stack, then the 4; the 4 is now on top and the 3 below it. The subtraction operator removes the top two items from the stack, performs 3 − 4, and puts the result of −1 onto the stack.
    </p>
    
    <p>
        The common terminology is that added items are pushed on the stack and removed items are popped.
    </p>
    
    <p>
        The advantage of reverse Polish notation is that it removes the need for order of operations and parentheses that are required by infix notation and can be evaluated linearly, left-to-right. For example, the infix expression (3 × 4) + (5 × 6) becomes 3 4 × 5 6 × + in reverse Polish notation.
    </p>

    source: Wikipedia
</div>

<style lang="scss">
    @use '../../lib/globals/colors.scss';

    div {
        width: 400px;
        padding: 30px;
        @extend %paper;
    }
</style>